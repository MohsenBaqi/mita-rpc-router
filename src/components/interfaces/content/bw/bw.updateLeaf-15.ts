/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface BwUpdateLeaf {
  method: 'bw.updateLeaf'
  auth_type?: 'ADMIN'
  leaf_id: number
  leaf_name: string
  default_rate_kbits: number
  default_ceil_kbits: number
  total_rate_kbits: number
  total_ceil_kbits: number
  default_priority: number
  total_priority: number
}
