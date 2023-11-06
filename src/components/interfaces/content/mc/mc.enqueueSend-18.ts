/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface McEnqueueSend {
  method: "mc.enqueueSend";
  auth_type?: "NORMAL_USER" | "VOIP_USER";
  body: string;
  destinations: string;
  msg_type: "SMS" | "E-Mail" | "Message To Admin" | "Message To User";
  schedule_date: string | number;
  schedule_date_unit: "jalali" | "gregorian" | "years" | "months" | "days" | "hours" | "minutes";
}
