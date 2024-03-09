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
    removeAuthSession: () => localStorage.removeItem(authSessionKey),
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
    adminLogout: () => {
      storageHelper.removeAuthSession()
    },

    //   IPPool
    adminGetIPpoolNames: async (
      { loadBalancing }: { loadBalancing: boolean } | undefined = {
        loadBalancing: false,
      },
    ) => {
      privateMethod = 'ippool.getIPpoolNames'
      privateProps = {
        auth_type: 'ADMIN',
        ippool_type: loadBalancing ? 'load_balancing' : '',
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetIPpoolInfo: async ({ name }: { name: string }) => {
      privateMethod = 'ippool.getIPpoolInfo'
      privateProps = {
        auth_type: 'ADMIN',
        ippool_name: name,
      }

      return privateCall({ sessionRequired: true })
    },
    adminAddNewIPpool: async ({ name, comment }: { name: string; comment: string }) => {
      privateMethod = 'ippool.addNewIPpool'
      privateProps = {
        auth_type: 'ADMIN',
        ippool_name: name,
        comment: comment,
      }

      return privateCall({ sessionRequired: true })
    },
    adminAddIPtoPool: async ({ name, ip }: { name: string; ip: string }) => {
      privateMethod = 'ippool.addIPtoPool'
      privateProps = {
        auth_type: 'ADMIN',
        ippool_name: name,
        ip: ip,
      }

      return privateCall({ sessionRequired: true })
    },
    adminDelIPfromPool: async ({ name, ip }: { name: string; ip: string }) => {
      privateMethod = 'ippool.delIPfromPool'
      privateProps = {
        auth_type: 'ADMIN',
        ippool_name: name,
        ip: ip,
      }

      return privateCall({ sessionRequired: true })
    },
    adminForceDelIPfromPool: async ({ name, ip }: { name: string; ip: string }) => {
      privateMethod = 'ippool.forceDelIPfromPool'
      privateProps = {
        auth_type: 'ADMIN',
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
        auth_type: 'ADMIN',
        ippool_name: name,
        ippool_comment: comment,
        balancing_strategy: strategy,
        children_ippool_percentages: childPercentages,
      }

      return privateCall({ sessionRequired: true })
    },

    // RAS
    adminGetActiveRasIPs: async () => {
      privateMethod = 'ippool.getActiveRasIPs'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetInactiveRasIPs: async () => {
      privateMethod = 'ippool.getInActiveRases'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetRasInfo: async ({ rasIP }: { rasIP: string }) => {
      privateMethod = 'ippool.getRasInfo'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
      }

      return privateCall({ sessionRequired: true })
    },
    adminDeactiveRas: async ({ rasIP }: { rasIP: string }) => {
      privateMethod = 'ippool.deActiveRas'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
      }

      return privateCall({ sessionRequired: true })
    },
    adminEnableRas: async ({ rasIP }: { rasIP: string }) => {
      privateMethod = 'ippool.reActiveRas'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
      }

      return privateCall({ sessionRequired: true })
    },
    adminDeleteRas: async ({ rasID }: { rasID: number }) => {
      privateMethod = 'ippool.deleteRas'
      privateProps = {
        auth_type: 'ADMIN',
        ras_id: rasID,
      }

      return privateCall({ sessionRequired: true })
    },
    adminAddNewRAS: async ({
      ras_ip,
      ras_type,
      radius_secret,
      ras_description,
      comment,
    }: {
      ras_ip: string
      ras_type: any
      radius_secret: string
      ras_description: string
      comment: string
    }) => {
      privateMethod = 'ippool.addNewRas'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip,
        ras_type,
        radius_secret,
        ras_description,
        comment,
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetRasTypes: async () => {
      privateMethod = 'ippool.getRasTypes'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetRasIPPools: async ({ rasIP }: { rasIP: string }) => {
      privateMethod = 'ippool.getRasIPpools'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
      }

      return privateCall({ sessionRequired: true })
    },
    adminAddRasIPPool: async ({ rasIP, ippoolName }: { rasIP: string; ippoolName: string }) => {
      privateMethod = 'ippool.addIPpoolToRas'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
        ippool_name: ippoolName,
      }

      return privateCall({ sessionRequired: true })
    },
    adminDeleteRasIPPool: async ({ rasIP, ippoolName }: { rasIP: string; ippoolName: string }) => {
      privateMethod = 'ippool.forceDelIPfromPool'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
        ippool_name: ippoolName,
      }

      return privateCall({ sessionRequired: true })
    },
  }
})()

export default RPC
