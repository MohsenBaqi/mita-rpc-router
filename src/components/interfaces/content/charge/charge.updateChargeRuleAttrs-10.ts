/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ChargeUpdateChargeRuleAttrs {
  method: "charge.updateChargeRuleAttrs";
  auth_type?: "ADMIN";
  charge_rule_id: number;
  charge_name: string;
  update_attrs: {
    [k: string]: unknown;
  };
  delete_attrs: unknown[];
}