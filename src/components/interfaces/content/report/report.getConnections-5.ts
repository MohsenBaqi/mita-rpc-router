/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type InSeconds = number
export type DatetimeOrNumber2 = DatetimeOrNumber | DatetimeOrNumber1
export type DatetimeOrNumber = string
export type DatetimeOrNumber1 = number
export type DatetimeOrNumber5 = DatetimeOrNumber3 | DatetimeOrNumber4
export type DatetimeOrNumber3 = string
export type DatetimeOrNumber4 = number
export type DatetimeOrNumber8 = DatetimeOrNumber6 | DatetimeOrNumber7
export type DatetimeOrNumber6 = string
export type DatetimeOrNumber7 = number
export type DatetimeOrNumber11 = DatetimeOrNumber9 | DatetimeOrNumber10
export type DatetimeOrNumber9 = string
export type DatetimeOrNumber10 = number
export type ComesWithCpm = '=' | '>' | '<' | '>=' | '<='
export type ListOfProviderNamesOrStringOfOneProviderName2 =
  | ListOfProviderNamesOrStringOfOneProviderName
  | ListOfProviderNamesOrStringOfOneProviderName1
export type ListOfProviderNamesOrStringOfOneProviderName = unknown[]
export type ListOfProviderNamesOrStringOfOneProviderName1 = string

export interface ReportGetConnections {
  method: 'report.getConnections'
  auth_type?: 'NORMAL_USER' | 'VOIP_USER'
  conds: {
    credit_used?: number
    credit_used_op?: '=' | '>' | '<' | '>=' | '<='
    duration?: InSeconds
    duration_op?: '=' | '>' | '<' | '>=' | '<='
    login_time_from?: DatetimeOrNumber2
    login_time_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    login_time_to?: DatetimeOrNumber5
    login_time_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    logout_time_from?: DatetimeOrNumber8
    logout_time_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    logout_time_to?: DatetimeOrNumber11
    logout_time_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    successful?: 'yes' | 'no'
    service?: 'Internet' | 'VoIP'
    ras_ip?: string
    ras_desc?: string
    caller_id?: string
    caller_id_op?: '=' | '>' | '<' | '>=' | '<='
    mac?: string
    port?: string
    dnis?: string
    assigned_ip?: string
    station_ip?: string
    cpm?: number
    cpm_op?: ComesWithCpm
    called_number?: string
    called_number_op?: '=' | '>' | '<' | '>=' | '<='
    prefix_name?: string
    prefix_name_op?: '=' | '>' | '<' | '>=' | '<='
    called_ip?: string
    voip_provider_names?: ListOfProviderNamesOrStringOfOneProviderName2
    remote_ip?: string
    [k: string]: unknown
  }
  from: number
  to: number
  sort_by: 'credit_used' | 'login_time' | 'logout_time' | 'successful' | 'service' | 'ras_id' | 'connection_log_id'
  desc: boolean
}
