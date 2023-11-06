/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type DatetimeOrNumber2 = DatetimeOrNumber | DatetimeOrNumber1
export type DatetimeOrNumber = string
export type DatetimeOrNumber1 = number
export type DatetimeOrNumber5 = DatetimeOrNumber3 | DatetimeOrNumber4
export type DatetimeOrNumber3 = string
export type DatetimeOrNumber4 = number
export type MessageBody = string
export type DestinationAddressNumberEmail = string
export type CanBeAListOfStringsTooForExampleMsgTypesSMSEMail = 'SMS' | 'E-Mail' | 'Message To Admin' | 'Message To User'

export interface McAdminSearchSentMessage {
  method: 'mc.adminSearchSentMessage'
  auth_type?: 'ADMIN'
  conds: {
    owner_type?: 'ISP'
    isp_ids?: number
    message_ids?: number
    transfer_date_from?: DatetimeOrNumber2
    transfer_date_from_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    transfer_date_to?: DatetimeOrNumber5
    transfer_date_to_unit?: 'jalali' | 'gregorian' | 'years' | 'months' | 'days' | 'hours' | 'minutes'
    body?: MessageBody
    body_op?: 'like' | 'ilike' | 'starts_with' | 'ends_with' | 'equals'
    to?: DestinationAddressNumberEmail
    to_op?: 'like' | 'ilike' | 'starts_with' | 'ends_with' | 'equals'
    msg_types?: CanBeAListOfStringsTooForExampleMsgTypesSMSEMail
    [k: string]: unknown
  }
  from: number
  to: number
  order_by: 'message_id' | 'msg_type' | 'transfer_date'
  desc: boolean
}
