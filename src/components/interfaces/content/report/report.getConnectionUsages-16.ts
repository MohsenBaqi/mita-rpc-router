/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ReportGetConnectionUsages {
  method: 'report.getConnectionUsages'
  auth_type?: 'ADMIN'
  conds: {
    [k: string]: unknown
  }
  from: number
  to: number
  order_by: 'total_credit' | 'total_duration' | 'total_in_bytes' | 'total_out_bytes'
}
