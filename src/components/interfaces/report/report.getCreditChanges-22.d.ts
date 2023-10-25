/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ReportGetCreditChanges {
  method: "report.getCreditChanges";
  auth_type: "NORMAL_USER" | "VOIP_USER";
  conds: unknown;
  from: number;
  to: number;
  sort_by: "change_time" | "per_user_credit";
  desc: boolean;
}
