/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface OnlinePaymentUpdateGateway {
  method: 'online_payment.updateGateway'
  auth_type: 'ADMIN'
  gateway_id: number
  gateway_name: string
  owner_isp_name: string
  priority: number
  comment: string
  attributes: unknown
}
