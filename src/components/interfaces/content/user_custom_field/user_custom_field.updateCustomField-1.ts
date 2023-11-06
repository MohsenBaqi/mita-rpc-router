/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UserCustomFieldUpdateCustomField {
  method: "user_custom_field.updateCustomField";
  auth_type?: "ADMIN";
  custom_field_id: number;
  name: string;
  description: string;
  comment: string;
  value_type: "string" | "int" | "float";
  interface_type: "text_field" | "single_select" | "radio_button" | "checkbox";
  allowable_values: unknown[];
  mandatory: boolean;
}