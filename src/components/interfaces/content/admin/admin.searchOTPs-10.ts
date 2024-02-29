/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type AvailableMeansNotExpired = 'yes' | 'no'

export interface AdminSearchOTPs {
  method: 'admin.searchOTPs'
  auth_type?: 'ADMIN'
  conds: {
    creation_date_from?: string
    creation_date_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    creation_date_to?: string
    creation_date_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    used_date_from?: string
    used_date_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    used_date_to?: string
    used_date_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    expired?: 'yes' | 'no'
    available?: AvailableMeansNotExpired
    [k: string]: unknown
  }
  _from: number
  to: number
  sort_by: 'otp_id' | 'creation_date' | 'used_date'
  desc: boolean
}
