/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PermSavePermsOfAdminToTemplate {
  method: "perm.savePermsOfAdminToTemplate";
  auth_type?: "ADMIN";
  admin_username: string;
  perm_template_name: string;
}