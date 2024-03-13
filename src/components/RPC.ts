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
      privateMethod = 'ras.getActiveRasIPs'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetInactiveRasIPs: async () => {
      privateMethod = 'ras.getInActiveRases'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetRasInfo: async ({ rasIP }: { rasIP: string }) => {
      privateMethod = 'ras.getRasInfo'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
      }

      return privateCall({ sessionRequired: true })
    },
    adminDeactiveRas: async ({ rasIP }: { rasIP: string }) => {
      privateMethod = 'ras.deActiveRas'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
      }

      return privateCall({ sessionRequired: true })
    },
    adminEnableRas: async ({ rasIP }: { rasIP: string }) => {
      privateMethod = 'ras.reActiveRas'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
      }

      return privateCall({ sessionRequired: true })
    },
    adminDeleteRas: async ({ rasID }: { rasID: number }) => {
      privateMethod = 'ras.deleteRas'
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
      privateMethod = 'ras.addNewRas'
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
      privateMethod = 'ras.getRasTypes'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetRasIPPools: async ({ rasIP }: { rasIP: string }) => {
      privateMethod = 'ras.getRasIPpools'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
      }

      return privateCall({ sessionRequired: true })
    },
    adminAddRasIPPool: async ({ rasIP, ippoolName }: { rasIP: string; ippoolName: string }) => {
      privateMethod = 'ras.addIPpoolToRas'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
        ippool_name: ippoolName,
      }

      return privateCall({ sessionRequired: true })
    },
    adminDeleteRasIPPool: async ({ rasIP, ippoolName }: { rasIP: string; ippoolName: string }) => {
      privateMethod = 'ras.delIPpoolFromRas'
      privateProps = {
        auth_type: 'ADMIN',
        ras_ip: rasIP,
        ippool_name: ippoolName,
      }

      return privateCall({ sessionRequired: true })
    },

    // User Custom Field
    adminGetCustomFields: async () => {
      privateMethod = 'user_custom_field.getAllCustomFields'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },
    adminAddCustomField: async ({
      name,
      description,
      comment,
      value_type,
      interface_type,
      allowable_values,
      mandatory,
    }: {
      name: string
      description: string
      comment: string
      value_type: 'string' | 'int' | 'float'
      interface_type: 'text_field' | 'single_select' | 'radio_button' | 'checkbox'
      allowable_values: unknown[]
      mandatory: boolean
    }) => {
      privateMethod = 'user_custom_field.addNewCustomField'
      privateProps = {
        auth_type: 'ADMIN',
        name,
        description,
        comment,
        value_type,
        interface_type,
        allowable_values,
        mandatory,
      }

      return privateCall({ sessionRequired: true })
    },
    adminEditCustomField: async ({
      custom_field_id,
      name,
      description,
      comment,
      value_type,
      interface_type,
      allowable_values,
      mandatory,
    }: {
      custom_field_id: number
      name: string
      description: string
      comment: string
      value_type: 'string' | 'int' | 'float'
      interface_type: 'text_field' | 'single_select' | 'radio_button' | 'checkbox'
      allowable_values: unknown[]
      mandatory: boolean
    }) => {
      privateMethod = 'user_custom_field.updateCustomField'
      privateProps = {
        auth_type: 'ADMIN',
        custom_field_id,
        name,
        description,
        comment,
        value_type,
        interface_type,
        allowable_values,
        mandatory,
      }

      return privateCall({ sessionRequired: true })
    },
    adminDeleteCustomField: async ({ name }: { name: string }) => {
      privateMethod = 'user_custom_field.deleteCustomField'
      privateProps = {
        auth_type: 'ADMIN',
        name,
      }

      return privateCall({ sessionRequired: true })
    },

    // Advanced Config
    adminGetAdvancedConfig: async () => {
      privateMethod = 'ibs_defs.getAllDefs'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },
    adminSaveAdvancedConfig: async ({ defs }: { defs: any }) => {
      privateMethod = 'ibs_defs.saveDefs'
      privateProps = {
        auth_type: 'ADMIN',
        defs,
      }

      return privateCall({ sessionRequired: true })
    },
  }
})()

export default RPC
