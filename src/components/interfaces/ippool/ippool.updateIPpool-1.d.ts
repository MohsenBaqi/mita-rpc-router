/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface IppoolUpdateIPpool {
  method: "ippool.updateIPpool";
  auth_type: "ADMIN";
  ippool_id: number;
  ippool_name: string;
  comment: string;
}
