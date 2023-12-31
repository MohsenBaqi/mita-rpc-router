/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ArrayABCIsLikeABC2 = ArrayABCIsLikeABC | ArrayABCIsLikeABC1
export type ArrayABCIsLikeABC = unknown[]
export type ArrayABCIsLikeABC1 = string

export interface ReportGetOnlineUsers {
  method: 'report.getOnlineUsers'
  auth_type?: 'ADMIN'
  normal_sort_by:
    | 'user_id'
    | 'normal_username'
    | 'login_time_epoch'
    | 'duration_secs'
    | 'ras_description'
    | 'ras_ip'
    | 'isp_name'
    | 'unique_id_val'
    | 'current_credit'
    | 'group_name'
    | 'attrs_remote_ip'
    | 'in_bytes'
    | 'out_bytes'
    | 'in_rate'
    | 'out_rate'
    | 'attrs_mac'
    | 'attrs_station_ip'
    | 'attrs_caller_id'
  normal_desc: boolean
  voip_sort_by:
    | 'user_id'
    | 'voip_username'
    | 'login_time_epoch'
    | 'duration_secs'
    | 'ras_ip'
    | 'ras_description'
    | 'isp_name'
    | 'unique_id_val'
    | 'current_credit'
    | 'called_number'
    | 'prefix_name'
    | 'group_name'
    | 'attrs_caller_id'
    | 'attrs_caller_ip'
    | 'attrs_called_ip'
    | 'voip_provider'
  voip_desc: boolean
  conds: {
    dnis?: string
    isp_ids?: unknown[]
    isp_names?: unknown[]
    ras_ips?: unknown[]
    remote_ip?: string
    username_starts_with?: ArrayABCIsLikeABC2
    [k: string]: unknown
  }
}
