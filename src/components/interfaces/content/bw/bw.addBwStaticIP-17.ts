/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface BwAddBwStaticIP {
  method: "bw.addBwStaticIP";
  auth_type?: "ADMIN";
  ip_addr: string;
  tx_leaf_name: string;
  rx_leaf_name: string;
}