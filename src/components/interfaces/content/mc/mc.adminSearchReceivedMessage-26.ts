/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type DatetimeOrNumber2 = DatetimeOrNumber | DatetimeOrNumber1;
export type DatetimeOrNumber = string;
export type DatetimeOrNumber1 = number;
export type DatetimeOrNumber5 = DatetimeOrNumber3 | DatetimeOrNumber4;
export type DatetimeOrNumber3 = string;
export type DatetimeOrNumber4 = number;
export type MessageBody = string;
export type SourceSenderAddressPhoneNumberEmail = string;
export type CanBeAListOfStringsTooForExampleMsgTypesSMSEMail =
  | "SMS"
  | "E-Mail"
  | "Message To Admin"
  | "Message To User";

export interface McAdminSearchReceivedMessage {
  method: "mc.adminSearchReceivedMessage";
  auth_type?: "ADMIN";
  conds: {
    owner_type?: "USER";
    user_ids?: number;
    user_deleted?: boolean;
    message_ids?: number;
    receive_date_from?: DatetimeOrNumber2;
    receive_date_from_unit?: "jalali" | "gregorian" | "years" | "months" | "days" | "hours" | "minutes";
    receive_date_to?: DatetimeOrNumber5;
    receive_date_to_unit?: "jalali" | "gregorian" | "years" | "months" | "days" | "hours" | "minutes";
    body?: MessageBody;
    body_op?: "like" | "ilike" | "starts_with" | "ends_with" | "equals";
    from?: SourceSenderAddressPhoneNumberEmail;
    from_op?: "like" | "ilike" | "starts_with" | "ends_with" | "equals";
    msg_types?: CanBeAListOfStringsTooForExampleMsgTypesSMSEMail;
    [k: string]: unknown;
  };
  from: number;
  to: number;
  order_by: "message_id" | "msg_type" | "transfer_date";
  desc: boolean;
}