/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface AdminAddNewAdmin {
  method: "admin.addNewAdmin";
  auth_type?: "ADMIN";
  admin_username: string;
  admin_password: string;
  admin_isp_name: string;
  name: string;
  email: string;
  comment: string;
  admin_has_otp: boolean;
  admin_request_limit: number;
}