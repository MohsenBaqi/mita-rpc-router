/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ForAdminsListOfIspNamesOrStringOneIspName2 =
  | ForAdminsListOfIspNamesOrStringOneIspName
  | ForAdminsListOfIspNamesOrStringOneIspName1
export type ForAdminsListOfIspNamesOrStringOneIspName = unknown[]
export type ForAdminsListOfIspNamesOrStringOneIspName1 = string
export type Datetime = string
export type Datetime1 = string

export interface InvoiceSearchProformaInvoices {
  method: 'invoice.searchProformaInvoices'
  auth_type?: 'ADMIN'
  conds: {
    isp_names?: ForAdminsListOfIspNamesOrStringOneIspName2
    user_ids?: string
    pi_ids?: string
    is_expired?: boolean
    total_amount_from?: number
    total_amount_to?: number
    issue_date_from?: Datetime
    issue_date_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    issue_date_to?: Datetime1
    issue_date_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    [k: string]: unknown
  }
  _from: number
  to: number
  sort_by: 'issue_date' | 'user_id' | 'total_amount'
  desc: boolean
}
