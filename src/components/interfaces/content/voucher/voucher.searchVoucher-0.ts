/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type TrueMeansVoucherIsUsed = boolean
export type ListOfIspNamesOrStringOfOneIspName2 =
  | ListOfIspNamesOrStringOfOneIspName
  | ListOfIspNamesOrStringOfOneIspName1
export type ListOfIspNamesOrStringOfOneIspName = unknown[]
export type ListOfIspNamesOrStringOfOneIspName1 = string

export interface VoucherSearchVoucher {
  method: 'voucher.searchVoucher'
  auth_type?: 'ADMIN'
  conds: {
    voucher_ids?: string
    batch_ids?: string
    pins?: string
    is_used?: TrueMeansVoucherIsUsed
    isp_names?: ListOfIspNamesOrStringOfOneIspName2
    [k: string]: unknown
  }
  from: number
  to: number
  sort_by: 'pin' | 'voucher_id'
  desc: boolean
}
