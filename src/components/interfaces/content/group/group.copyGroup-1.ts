/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface GroupCopyGroup {
  method: "group.copyGroup";
  auth_type?: "ADMIN";
  group_name: string;
  comment: string;
  isp_name: string;
  copy_count: number;
}
