/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UserChangeCreditExtended {
  method: 'user.changeCreditExtended'
  auth_type?: 'ADMIN'
  user_id: string
  credit: number
  change_type: 'ADD' | 'SET' | 'MULTIPLY'
  credit_comment: string
}
