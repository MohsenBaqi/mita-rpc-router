/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface BwUpdateInterface {
  method: 'bw.updateInterface'
  auth_type?: 'ADMIN'
  interface_id: number
  hostname: string
  interface_name: string
  comment: string
  host_type: 'Linux' | 'Mikrotik'
}
