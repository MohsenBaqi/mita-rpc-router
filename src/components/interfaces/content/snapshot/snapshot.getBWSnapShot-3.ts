/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type UniqueUserIdForLimitReportingForThatUser = string;
export type StartDateAndTimeFormatYMDHM = string;
export type StartDateAndTimeFormatYMDHM1 = string;
export type DateUnit = "gregorian" | "jalali" | "years" | "months" | "days" | "hours" | "minutes" | "seconds";
export type DateUnit1 = "gregorian" | "jalali" | "years" | "months" | "days" | "hours" | "minutes" | "seconds";
export type OperationForStartDate = "<" | ">" | "<=" | ">=";
export type OperationForEndDate = "<" | ">" | "<=" | ">=";

export interface SnapshotGetBWSnapShot {
  method: "snapshot.getBWSnapShot";
  auth_type?: "ADMIN" | "NORMAL_USER" | "VOIP_USER";
  conds: {
    user_id?: UniqueUserIdForLimitReportingForThatUser;
    date_from?: StartDateAndTimeFormatYMDHM;
    date_to?: StartDateAndTimeFormatYMDHM1;
    date_from_unit?: DateUnit;
    date_to_unit?: DateUnit1;
    date_from_op?: OperationForStartDate;
    date_to_op?: OperationForEndDate;
    [k: string]: unknown;
  };
}