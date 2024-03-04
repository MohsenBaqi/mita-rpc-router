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

const storageHelper = (() => {
  const authSessionKey = '5156cfa1e680247b5ccb3985e8715c10c4d8e1b2'
  return {
    setAuthSession: (session: string) => localStorage.setItem(authSessionKey, session),
    getAuthSession: () => localStorage.getItem(authSessionKey),
  }
})()

const getAuthSession = () => {
  const token = storageHelper.getAuthSession()
  return token ? token : ''
}

const RPC = (() => {
  let privateBaseUrl = ''
  let privateAuthRemoteaddr = ''
  let privateMethod = ''
  let privateProps = {}

  const privateCall = async (
    { sessionRequired }: { sessionRequired: boolean } | undefined = {
      sessionRequired: false,
    },
  ) => {
    const result = await axios
      .post(privateBaseUrl, {
        jsonrpc: '2.0',
        method: privateMethod,
        id: new Date().getTime(),
        params: {
          ...privateProps,
          auth_remoteaddr: privateAuthRemoteaddr,
          ...(sessionRequired && { auth_session: getAuthSession() }),
        },
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

      return privateCall().then((res) => {
        storageHelper.setAuthSession(res)
        return res
      })
    },

    //   IPPool
    adminGetIPpoolNames: async (
      { loadBalancing }: { loadBalancing: boolean } | undefined = {
        loadBalancing: false,
      },
    ) => {
      privateMethod = 'ippool.getIPpoolNames'
      privateProps = {
        ippool_type: loadBalancing ? 'load_balancing' : '',
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetIPpoolInfo: async ({ name }: { name: string }) => {
      privateMethod = 'ippool.getIPpoolInfo'
      privateProps = {
        ippool_name: name,
      }

      return privateCall({ sessionRequired: true })
    },
    adminAddNewIPpool: async ({ name, comment }: { name: string; comment: string }) => {
      privateMethod = 'ippool.addNewIPpool'
      privateProps = {
        ippool_name: name,
        comment: comment,
      }

      return privateCall({ sessionRequired: true })
    },
    adminAddIPtoPool: async ({ name, ip }: { name: string; ip: string }) => {
      privateMethod = 'ippool.addIPtoPool'
      privateProps = {
        ippool_name: name,
        ip: ip,
      }

      return privateCall({ sessionRequired: true })
    },
    adminDelIPfromPool: async ({ name, ip }: { name: string; ip: string }) => {
      privateMethod = 'ippool.delIPfromPool'
      privateProps = {
        ippool_name: name,
        ip: ip,
      }

      return privateCall({ sessionRequired: true })
    },
    adminForceDelIPfromPool: async ({ name, ip }: { name: string; ip: string }) => {
      privateMethod = 'ippool.forceDelIPfromPool'
      privateProps = {
        ippool_name: name,
        ip: ip,
      }

      return privateCall({ sessionRequired: true })
    },
    adminAddNewLoadBalancingIPpool: async ({
      name,
      comment,
      strategy,
      childPercentages,
    }: {
      name: string
      comment: string
      strategy: 'distributive' | 'fill_first'
      childPercentages: { [k: string]: unknown }
    }) => {
      privateMethod = 'ippool.addNewLoadBalancingIPpool'
      privateProps = {
        ippool_name: name,
        ippool_comment: comment,
        balancing_strategy: strategy,
        children_ippool_percentages: childPercentages,
      }

      return privateCall({ sessionRequired: true })
    },
  }
})()

export default RPC
