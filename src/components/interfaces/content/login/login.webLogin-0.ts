/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface LoginWebLogin {
  method: "login.webLogin";
  auth_type?: "ANONYMOUS";
  login_auth_type: "ADMIN" | "NORMAL_USER" | "VOIP_USER";
  login_auth_name: string;
  login_auth_pass: string;
  auth_remoteaddr: string;
}