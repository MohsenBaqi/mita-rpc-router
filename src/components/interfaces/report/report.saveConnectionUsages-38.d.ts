/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ReportSaveConnectionUsages {
  method: "report.saveConnectionUsages";
  auth_type: "ADMIN";
  report_type: "inout_usages" | "credit_usages" | "time_usages";
  conds: unknown;
  cols: unknown[];
  sort_by: "creation_date" | "normal_username" | "sum";
  output_type: "csv" | "pdf";
}
