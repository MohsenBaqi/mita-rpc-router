/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ListOfIspNamesOrStringOfOneIspName2 =
  | ListOfIspNamesOrStringOfOneIspName
  | ListOfIspNamesOrStringOfOneIspName1
export type ListOfIspNamesOrStringOfOneIspName = unknown[]
export type ListOfIspNamesOrStringOfOneIspName1 = string
export type DatetimeOrNumber2 = DatetimeOrNumber | DatetimeOrNumber1
export type DatetimeOrNumber = string
export type DatetimeOrNumber1 = number
export type DatetimeOrNumber5 = DatetimeOrNumber3 | DatetimeOrNumber4
export type DatetimeOrNumber3 = string
export type DatetimeOrNumber4 = number

export interface ReportGetTemporaryExtendLogs {
  method: 'report.getTemporaryExtendLogs'
  auth_type?: 'ADMIN'
  conds: {
    isp_names?: ListOfIspNamesOrStringOfOneIspName2
    user_ids?: string
    temporary_extend_date_from?: DatetimeOrNumber2
    temporary_extend_date_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    temporary_extend_date_to?: DatetimeOrNumber5
    temporary_extend_date_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    [k: string]: unknown
  }
  from: number
  to: number
  sort_by: 'temporary_extend_date' | 'user_id' | 'temporary_extend_hours' | 'credit_usage'
  desc: boolean
}
