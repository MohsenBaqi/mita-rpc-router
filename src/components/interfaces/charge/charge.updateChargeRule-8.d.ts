/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ChargeUpdateChargeRule {
  method: "charge.updateChargeRule";
  auth_type: "ADMIN";
  charge_rule_id: number;
  charge_rule_description: string;
  charge_rule_priority: number;
  charge_name: string;
}
