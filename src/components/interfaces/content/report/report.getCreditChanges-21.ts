/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type AdminUsername = string;
export type DatetimeOrNumber2 = DatetimeOrNumber | DatetimeOrNumber1;
export type DatetimeOrNumber = string;
export type DatetimeOrNumber1 = number;
export type DatetimeOrNumber5 = DatetimeOrNumber3 | DatetimeOrNumber4;
export type DatetimeOrNumber3 = string;
export type DatetimeOrNumber4 = number;
export type InternetUsernameThatIsDeleted = string;
export type VoipUsernameThatIsDeleted = string;

export interface ReportGetCreditChanges {
  method: "report.getCreditChanges";
  auth_type?: "ADMIN";
  conds: {
    user_view?: {
      [k: string]: unknown;
    };
    user_ids?: string;
    voip_username?: string;
    admin?: AdminUsername;
    action?: {
      [k: string]: unknown;
    }[];
    per_user_credit?: number;
    per_user_credit_op?: "=" | ">" | "<" | ">=" | "<=";
    isp_credit?: number;
    isp_credit_op?: "=" | ">" | "<" | ">=" | "<=";
    change_time_from?: DatetimeOrNumber2;
    change_time_from_unit?: "jalali" | "gregorian" | "years" | "months" | "days" | "hours" | "minutes";
    change_time_to?: DatetimeOrNumber5;
    change_time_to_unit?: "jalali" | "gregorian" | "years" | "months" | "days" | "hours" | "minutes";
    remote_addr?: string;
    comment?: string;
    deleted_internet_username?: InternetUsernameThatIsDeleted;
    deleted_voip_username?: VoipUsernameThatIsDeleted;
    [k: string]: unknown;
  };
  from: number;
  to: number;
  sort_by: "change_time" | "per_user_credit" | "isp_credit";
  desc: boolean;
}
