/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type SetsIsUserYesAndTurnsOnUserMode = string
export type SetsIsUserYesAndTurnsOnUserMode1 = unknown[]
export type SetsIsUserNoAndTurnsOnGroupMode = unknown[]
export type DatetimeOrNumber2 = DatetimeOrNumber | DatetimeOrNumber1
export type DatetimeOrNumber = string
export type DatetimeOrNumber1 = number
export type ListOfIspNamesOrStringOfOneIspName2 =
  | ListOfIspNamesOrStringOfOneIspName
  | ListOfIspNamesOrStringOfOneIspName1
export type ListOfIspNamesOrStringOfOneIspName = unknown[]
export type ListOfIspNamesOrStringOfOneIspName1 = string
export type AdminUsername = string

export interface ReportGetUserAuditLogs {
  method: 'report.getUserAuditLogs'
  auth_type?: 'ADMIN'
  conds: {
    user_ids?: SetsIsUserYesAndTurnsOnUserMode
    user_isp_names?: SetsIsUserYesAndTurnsOnUserMode1
    group_name?: SetsIsUserNoAndTurnsOnGroupMode
    attr_names?: string
    change_time_from?: string
    change_time_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    change_time_to?: DatetimeOrNumber2
    change_time_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    is_user?: 'yes' | 'no'
    isp_names?: ListOfIspNamesOrStringOfOneIspName2
    admin?: AdminUsername
    [k: string]: unknown
  }
  from: number
  to: number
  sort_by: 'change_time' | 'object_id' | 'admin_id'
  desc: boolean
}
