/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface McUserSearchSentMessage {
  method: "mc.userSearchSentMessage";
  auth_type: "NORMAL_USER" | "VOIP_USER";
  conds: unknown;
  from: number;
  to: number;
  order_by: "message_id" | "msg_type" | "transfer_date";
  desc: boolean;
}
