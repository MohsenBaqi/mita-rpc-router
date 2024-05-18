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
    adminGetRasDescriptions: async () => {
      privateMethod = 'ras.getRasDescriptions'
      privateProps = {
        auth_type: 'ADMIN',
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

    // Online Payment
    adminGetGatewayInfos: async () => {
      privateMethod = 'online_payment.getAllGatewayInfos'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetAvailableGatewayTypes: async () => {
      privateMethod = 'online_payment.getAvailableGatewayTypes'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },
    adminAddGateway: async ({
      gatewayName,
      gatewayType,
      ownerIspName,
      priority,
      comment,
    }: {
      gatewayName: string
      gatewayType: string
      ownerIspName: string
      priority: number
      comment: string
    }) => {
      privateMethod = 'online_payment.addGateway'
      privateProps = {
        auth_type: 'ADMIN',
        gateway_name: gatewayName,
        gateway_type: gatewayType,
        owner_isp_name: ownerIspName,
        priority,
        comment,
      }

      return privateCall({ sessionRequired: true })
    },
    adminEditGateway: async ({
      gatewayID,
      gatewayName,
      ownerIspName,
      priority,
      comment,
    }: {
      gatewayID: number
      gatewayName: string
      ownerIspName: string
      priority: number
      comment: string
    }) => {
      privateMethod = 'online_payment.updateGateway'
      privateProps = {
        auth_type: 'ADMIN',
        gateway_id: gatewayID,
        gateway_name: gatewayName,
        owner_isp_name: ownerIspName,
        priority,
        comment,
      }

      return privateCall({ sessionRequired: true })
    },
    adminDeleteGateway: async ({ gatewayName }: { gatewayName: string }) => {
      privateMethod = 'online_payment.deleteGateway'
      privateProps = {
        auth_type: 'ADMIN',
        gateway_name: gatewayName,
      }

      return privateCall({ sessionRequired: true })
    },

    // ISP
    adminGetAllISPNames: async () => {
      privateMethod = 'isp.getAllISPNames'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },

    // Group
    adminListGroups: async ({ activeOnly }: { activeOnly?: boolean }) => {
      privateMethod = 'group.listGroups'
      privateProps = {
        auth_type: 'ADMIN',
        ...(activeOnly && { activeOnly }),
      }

      return privateCall({ sessionRequired: true })
    },

    // Perm
    adminHasPerm: async ({ permName, adminUsername }: { permName: string; adminUsername: string }) => {
      privateMethod = 'perm.hasPerm'
      privateProps = {
        auth_type: 'ADMIN',
        perm_name: permName,
        admin_username: adminUsername,
      }

      return privateCall({ sessionRequired: true })
    },

    // Service
    adminListServiceNames: async () => {
      privateMethod = 'service.listServiceNames'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },
    adminListChargingNames: async () => {
      privateMethod = 'service.listChargingNames'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },

    // VoIP Provider
    adminListVoIPProviders: async () => {
      privateMethod = 'voip_provider.listVoIPProviders'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },

    // System Notification
    adminGetNotifications: async () => {
      privateMethod = 'SystemNotification.getNotifications'
      privateProps = {
        auth_type: 'ADMIN',
      }

      return privateCall({ sessionRequired: true })
    },

    // Admin
    adminGetAllAdminUsernames: async ({ isp_name }: { isp_name?: string }) => {
      privateMethod = 'admin.getAllAdminUsernames'
      privateProps = {
        auth_type: 'ADMIN',
        ...(isp_name && { isp_name }),
      }

      return privateCall({ sessionRequired: true })
    },

    // Report
    adminGetSystemAuditLogs: async ({
      categories,
      events,
      isp_names,
      admin,
      change_time_from,
      change_time_from_unit,
      change_time_to,
      change_time_to_unit,
      object_id,
      from,
      to,
      sort_by,
      desc,
    }: {
      categories?: any
      events?: any
      isp_names?: any
      admin?: string
      change_time_from?: any
      change_time_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      change_time_to?: any
      change_time_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      object_id?: number
      from: number
      to: number
      sort_by: 'change_time' | 'object_id' | 'admin_id' | 'event' | 'category' | 'isp_id'
      desc: boolean
    }) => {
      privateMethod = 'report.getSystemAuditLogs'
      privateProps = {
        auth_type: 'ADMIN',

        conds: {
          ...(categories && { categories }),
          ...(events && { events }),
          ...(isp_names && { isp_names }),
          ...(admin && { admin }),
          ...(change_time_from && { change_time_from }),
          ...(change_time_from_unit && { change_time_from_unit }),
          ...(change_time_to && { change_time_to }),
          ...(change_time_to_unit && { change_time_to_unit }),
          ...(object_id && { object_id }),
        },
        from,
        to,
        sort_by,
        desc,
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetUserAuditLogs: async ({
      user_ids,
      user_isp_names,
      group_name,
      attr_names,
      change_time_from,
      change_time_from_unit,
      change_time_to,
      change_time_to_unit,
      is_user,
      isp_names,
      admin,
      from,
      to,
      sort_by,
      desc,
    }: {
      user_ids?: string
      user_isp_names?: string
      group_name?: string
      attr_names?: string
      change_time_from?: string
      change_time_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      change_time_to?: any
      change_time_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      is_user?: 'yes' | 'no'
      isp_names?: any
      admin?: string
      [k: string]: unknown
      from: number
      to: number
      sort_by: 'change_time' | 'object_id' | 'admin_id'
      desc: boolean
    }) => {
      privateMethod = 'report.getUserAuditLogs'
      privateProps = {
        auth_type: 'ADMIN',
        conds: {
          ...(user_ids && { user_ids }),
          ...(user_isp_names && { user_isp_names }),
          ...(group_name && { group_name }),
          ...(attr_names && { attr_names }),
          ...(change_time_from && { change_time_from }),
          ...(change_time_from_unit && { change_time_from_unit }),
          ...(change_time_to && { change_time_to }),
          ...(change_time_to_unit && { change_time_to_unit }),
          ...(is_user && { is_user }),
          ...(isp_names && { isp_names }),
          ...(admin && { admin }),
        },
        from,
        to,
        sort_by,
        desc,
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetConnections: async ({
      user_ids,
      connection_username,
      connection_voip_username,
      not_username,
      username,
      voip_username,
      serial,
      sub_service_name,
      sub_service_charging,
      isp_names,
      credit_used,
      credit_used_op,
      duration,
      duration_op,
      login_time_from,
      login_time_from_unit,
      login_time_to,
      login_time_to_unit,
      logout_time_from,
      logout_time_from_unit,
      logout_time_to,
      logout_time_to_unit,
      show_total_credit_used,
      show_total_inouts,
      successful,
      service,
      ras_ip,
      ras_desc,
      group_name,
      exclude_isp_mapped_users,
      caller_id,
      caller_id_op,
      mac,
      port,
      dnis,
      assigned_ip,
      station_ip,
      cpm,
      cpm_op,
      called_number,
      called_number_op,
      prefix_name,
      prefix_name_op,
      called_ip,
      voip_provider_names,
      remote_ip,
      from,
      to,
      sort_by,
      desc,
    }: {
      user_ids?: string
      connection_username?: string
      connection_voip_username?: string
      not_username?: string
      username?: string
      voip_username?: string
      serial?: string
      sub_service_name?: string
      sub_service_charging?: string
      isp_names?: string
      credit_used?: number
      credit_used_op?: '=' | '>' | '<' | '>=' | '<='
      duration?: string | number
      duration_op?: '=' | '>' | '<' | '>=' | '<='
      login_time_from?: any
      login_time_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      login_time_to?: any
      login_time_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      logout_time_from?: any
      logout_time_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      logout_time_to?: any
      logout_time_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      show_total_credit_used?: any
      show_total_inouts?: any
      successful?: 'yes' | 'no'
      service?: 'Internet' | 'VoIP'
      ras_ip?: string
      ras_desc?: string
      group_name?: string
      exclude_isp_mapped_users?: boolean
      caller_id?: string
      caller_id_op?: '=' | '>' | '<' | '>=' | '<='
      mac?: string
      port?: string
      dnis?: string
      assigned_ip?: string
      station_ip?: string
      cpm?: number
      cpm_op?: any
      called_number?: string
      called_number_op?: '=' | '>' | '<' | '>=' | '<='
      prefix_name?: string
      prefix_name_op?: '=' | '>' | '<' | '>=' | '<='
      called_ip?: string
      voip_provider_names?: any
      remote_ip?: string
      from: number
      to: number
      sort_by:
        | 'user_id'
        | 'credit_used'
        | 'login_time'
        | 'logout_time'
        | 'successful'
        | 'service'
        | 'ras_id'
        | 'connection_log_id'
      desc: boolean
    }) => {
      privateMethod = 'report.getConnections'
      privateProps = {
        auth_type: 'ADMIN',
        conds: {
          ...(user_ids && { user_ids }),
          ...(connection_username && { connection_username }),
          ...(connection_voip_username && { connection_voip_username }),
          ...(not_username && { not_username }),
          ...(username && { username }),
          ...(voip_username && { voip_username }),
          ...(serial && { serial }),
          ...(sub_service_name && { sub_service_name }),
          ...(sub_service_charging && { sub_service_charging }),
          ...(isp_names && { isp_names }),
          ...(credit_used && { credit_used }),
          ...(credit_used_op && { credit_used_op }),
          ...(duration && { duration }),
          ...(duration_op && { duration_op }),
          ...(login_time_from && login_time_from),
          ...(login_time_from_unit && { login_time_from_unit }),
          ...(login_time_to && { login_time_to }),
          ...(login_time_to_unit && { login_time_to_unit }),
          ...(logout_time_from && { logout_time_from }),
          ...(logout_time_from_unit && { logout_time_from_unit }),
          ...(logout_time_to && { logout_time_to }),
          ...(logout_time_to_unit && { logout_time_to_unit }),
          ...(show_total_credit_used && { show_total_credit_used }),
          ...(show_total_inouts && { show_total_inouts }),
          ...(successful && { successful }),
          ...(service && { service }),
          ...(ras_ip && { ras_ip }),
          ...(ras_desc && { ras_desc }),
          ...(group_name && { group_name }),
          ...(exclude_isp_mapped_users && { exclude_isp_mapped_users }),
          ...(caller_id && { caller_id }),
          ...(caller_id_op && { caller_id_op }),
          ...(mac && { mac }),
          ...(port && { port }),
          ...(dnis && { dnis }),
          ...(assigned_ip && { assigned_ip }),
          ...(station_ip && { station_ip }),
          ...(cpm && { cpm }),
          ...(cpm_op && { cpm_op }),
          ...(called_number && { called_number }),
          ...(called_number_op && { called_number_op }),
          ...(prefix_name && { prefix_name }),
          ...(prefix_name_op && { prefix_name_op }),
          ...(called_ip && { called_ip }),
          ...(voip_provider_names && { voip_provider_names }),
          ...(remote_ip && { remote_ip }),
        },
        from,
        to,
        sort_by,
        desc,
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetCreditChanges: async ({
      comment_op,
      isp_names,
      show_total_per_user_credit,
      user_isp_names,
      include_child_isp,
      show_total_isp_credit,
      user_view,
      user_ids,
      voip_username,
      admin,
      action,
      per_user_credit,
      per_user_credit_op,
      isp_credit,
      isp_credit_op,
      change_time_from,
      change_time_from_unit,
      change_time_to,
      change_time_to_unit,
      comment,
      deleted_internet_username,
      deleted_voip_username,
      from,
      to,
      sort_by,
      desc,
    }: {
      comment_op?: string
      isp_names?: any
      show_total_per_user_credit?: boolean
      user_isp_names?: any
      include_child_isp?: boolean
      show_total_isp_credit?: boolean
      user_view?: boolean
      user_ids?: string
      voip_username?: string
      admin?: string
      action?: any
      per_user_credit?: number
      per_user_credit_op?: '=' | '>' | '<' | '>=' | '<='
      isp_credit?: number
      isp_credit_op?: '=' | '>' | '<' | '>=' | '<='
      change_time_from?: string
      change_time_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      change_time_to?: string
      change_time_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      comment?: string
      deleted_internet_username?: string
      deleted_voip_username?: string
      from: number
      to: number
      sort_by: 'change_time' | 'object_id' | 'admin_id' | 'event' | 'category' | 'isp_id'
      desc: boolean
    }) => {
      privateMethod = 'report.getCreditChanges'
      privateProps = {
        auth_type: 'ADMIN',

        conds: {
          ...(comment_op && { comment_op }),
          ...(isp_names && { isp_names }),
          ...(show_total_per_user_credit && { show_total_per_user_credit }),
          ...(user_isp_names && { user_isp_names }),
          ...(include_child_isp && { include_child_isp }),
          ...(show_total_isp_credit && { show_total_isp_credit }),
          ...(user_view && { user_view }),
          ...(user_ids && { user_ids }),
          ...(voip_username && { voip_username }),
          ...(action && { action }),
          ...(per_user_credit && { per_user_credit }),
          ...(per_user_credit_op && { per_user_credit_op }),
          ...(isp_credit && { isp_credit }),
          ...(isp_credit_op && { isp_credit_op }),
          ...(comment && { comment }),
          ...(deleted_internet_username && { deleted_internet_username }),
          ...(deleted_voip_username && { deleted_voip_username }),
          ...(admin && { admin }),
          ...(change_time_from && { change_time_from }),
          ...(change_time_from_unit && { change_time_from_unit }),
          ...(change_time_to && { change_time_to }),
          ...(change_time_to_unit && { change_time_to_unit }),
        },
        from,
        to,
        sort_by,
        desc,
      }

      return privateCall({ sessionRequired: true })
    },

    // Traffic Analyzer
    adminGetTrafficAnalyzerLogs: async ({
      username,
      is_main_source,
      url,
      ip_dst,
      port_dst,
      port_src,
      is_aux_source,
      ip_src,
      date_from,
      date_from_unit,
      date_from_ltgt,
      date_from_op,
      date_to,
      date_to_unit,
      date_to_ltgt,
      date_to_op,
      from,
      to,
      sort_by,
      desc,
    }: {
      username?: string
      is_main_source?: string
      url?: string
      ip_dst?: string
      port_dst?: string
      port_src?: string
      is_aux_source?: string
      ip_src?: string
      date_from?: any
      date_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      date_from_ltgt?: any
      date_from_op?: '=' | '>' | '<' | '>=' | '<='
      date_to?: any
      date_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      date_to_ltgt?: any
      date_to_op?: '=' | '>' | '<' | '>=' | '<='
      from: number
      to: number
      sort_by: 'change_time' | 'object_id' | 'admin_id' | 'event' | 'category' | 'isp_id'
      desc: boolean
    }) => {
      privateMethod = 'traffic_analyzer.getTrafficAnalyzerLogs'
      privateProps = {
        auth_type: 'ADMIN',

        conds: {
          ...(username && { username }),
          ...(is_main_source && { is_main_source }),
          ...(url && { url }),
          ...(ip_dst && { ip_dst }),
          ...(port_dst && { port_dst }),
          ...(port_src && { port_src }),
          ...(is_aux_source && { is_aux_source }),
          ...(ip_src && { ip_src }),
          ...(date_from && { date_from }),
          ...(date_from_unit && { date_from_unit }),
          ...(date_from_ltgt && { date_from_ltgt }),
          ...(date_from_op && { date_from_op }),
          ...(date_to && { date_to }),
          ...(date_to_unit && { date_to_unit }),
          ...(date_to_ltgt && { date_to_ltgt }),
          ...(date_to_op && { date_to_op }),
        },
        from,
        to,
        sort_by,
        desc,
      }

      return privateCall({ sessionRequired: true })
    },
    adminGetMostVisitedDomains: async ({
      username,
      data_unit,
      classification,
      group_name,
      isp_name,
      ras_desc,
      date_from,
      date_from_unit,
      date_to,
      date_to_unit,
      from,
      to,
      sort_by,
      desc,
    }: {
      username?: string
      data_unit?: string
      classification?: string
      group_name?: string
      isp_name?: string
      ras_desc?: string
      date_from?: any
      date_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      date_to?: any
      date_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
      from: number
      to: number
      sort_by: 'change_time' | 'object_id' | 'admin_id' | 'event' | 'category' | 'isp_id'
      desc: boolean
    }) => {
      privateMethod = 'traffic_analyzer.getMostVisitedDomains'
      privateProps = {
        auth_type: 'ADMIN',

        conds: {
          ...(username && { username }),
          ...(data_unit && { data_unit }),
          ...(classification && { classification }),
          ...(group_name && { group_name }),
          ...(isp_name && { isp_name }),
          ...(ras_desc && { ras_desc }),
          ...(date_from && { date_from }),
          ...(date_from_unit && { date_from_unit }),
          ...(date_to && { date_to }),
          ...(date_to_unit && { date_to_unit }),
        },
        from,
        to,
        sort_by,
        desc,
      }

      return privateCall({ sessionRequired: true })
    },
  }
})()

export default RPC
