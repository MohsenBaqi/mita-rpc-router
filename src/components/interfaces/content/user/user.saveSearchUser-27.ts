/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UserSaveSearchUser {
  method: 'user.saveSearchUser'
  auth_type?: 'ADMIN'
  conds: {
    [k: string]: unknown
  }
  order_by:
    | 'normal_username'
    | 'voip_username'
    | 'user_id'
    | 'group_id'
    | 'creation_date'
    | 'owner_id'
    | 'credit'
    | 'deposit'
    | 'first_login'
    | 'serial'
    | 'serial_numeric'
  desc: boolean
  basic: unknown[]
  attrs: unknown[]
  output_type: 'csv' | 'pdf'
}
