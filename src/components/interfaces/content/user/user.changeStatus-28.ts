/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UserChangeStatus {
  method: "user.changeStatus";
  auth_type?: "ADMIN";
  user_id: string;
  status: "Package" | "Recharged" | "Temporary Extended";
}
