import axios from 'axios'
import interfaces from './interfaces'

export interface CommonParamsByCriteria {
  auth_name: string
  auth_pass: string
  auth_remoteaddr: string
  date_type?: 'gregorian' | 'jalali' | 'relative'
}
export interface CommonParamsBySession {
  auth_session: string
  auth_remoteaddr: string
  date_type?: 'gregorian' | 'jalali' | 'relative'
}
export interface CommonParamsAnonymous {
  auth_type: 'ANONYMOUS'
  date_type?: 'gregorian' | 'jalali' | 'relative'
}
type CommonParams = CommonParamsByCriteria | CommonParamsBySession | CommonParamsAnonymous

type ConditionalProps = CommonParams & interfaces

const RPC = (() => {
  let privateBaseUrl = ''
  let privateAuthRemoteaddr = ''
  let privateMethod = ''
  let privateProps = {}

  const privateCall = async () => {
    const result = await axios
      .post(privateBaseUrl, {
        jsonrpc: '2.0',
        method: privateMethod,
        id: new Date().getTime(),
        params: { ...privateProps, auth_remoteaddr: privateAuthRemoteaddr },
      })
      .then((res) => {
        if (res?.data?.error) {
          throw res?.data?.error
        } else {
          return res?.data?.result
        }
      })
      .catch((err) => {
        throw err
      })

    return result
  }

  return {
    config: ({ baseUrl, authRemoteaddr }: { baseUrl: string; authRemoteaddr: string }) => {
      privateBaseUrl = baseUrl
      privateAuthRemoteaddr = authRemoteaddr
    },
    call: async ({ method, ...rest }: ConditionalProps) => {
      privateMethod = method
      privateProps = rest

      return privateCall()
    },
    // frequently called methods
    adminLogin: async ({ username, password }: { username: string; password: string }) => {
      privateMethod = 'login.login'
      privateProps = {
        auth_type: 'ANONYMOUS',
        login_auth_type: 'ADMIN',
        login_auth_name: username,
        login_auth_pass: password,
        auth_name: '',
        auth_pass: '',
        create_session: true,
      }

      return privateCall()
    },

    //   IPPool
    adminGetIPpoolNames: async ({
      loadBalancing = false,
      authSession,
    }: {
      loadBalancing?: boolean
      authSession: string
    }) => {
      privateMethod = 'ippool.getIPpoolNames'
      privateProps = {
        ippool_type: loadBalancing ? 'load_balancing' : '',
        auth_session: authSession,
      }

      return privateCall()
    },
    adminGetIPpoolInfo: async ({ name, authSession }: { name: string; authSession: string }) => {
      privateMethod = 'ippool.getIPpoolInfo'
      privateProps = {
        ippool_name: name,
        auth_session: authSession,
      }

      return privateCall()
    },
    adminAddNewIPpool: async ({
      name,
      comment,
      authSession,
    }: {
      name: string
      comment: string
      authSession: string
    }) => {
      privateMethod = 'ippool.addNewIPpool'
      privateProps = {
        ippool_name: name,
        comment: comment,
        auth_session: authSession,
      }

      return privateCall()
    },
    adminAddIPtoPool: async ({ name, ip, authSession }: { name: string; ip: string; authSession: string }) => {
      privateMethod = 'ippool.addIPtoPool'
      privateProps = {
        ippool_name: name,
        ip: ip,
        auth_session: authSession,
      }

      return privateCall()
    },
    adminDelIPfromPool: async ({ name, ip, authSession }: { name: string; ip: string; authSession: string }) => {
      privateMethod = 'ippool.delIPfromPool'
      privateProps = {
        ippool_name: name,
        ip: ip,
        auth_session: authSession,
      }

      return privateCall()
    },
    adminForceDelIPfromPool: async ({ name, ip, authSession }: { name: string; ip: string; authSession: string }) => {
      privateMethod = 'ippool.forceDelIPfromPool'
      privateProps = {
        ippool_name: name,
        ip: ip,
        auth_session: authSession,
      }

      return privateCall()
    },
    adminAddNewLoadBalancingIPpool: async ({
      name,
      comment,
      strategy,
      childPercentages,
      authSession,
    }: {
      name: string
      comment: string
      strategy: 'distributive' | 'fill_first'
      childPercentages: { [k: string]: unknown }
      authSession: string
    }) => {
      privateMethod = 'ippool.addNewLoadBalancingIPpool'
      privateProps = {
        ippool_name: name,
        ippool_comment: comment,
        balancing_strategy: strategy,
        children_ippool_percentages: childPercentages,
        auth_session: authSession,
      }

      return privateCall()
    },
  }
})()

export default RPC
