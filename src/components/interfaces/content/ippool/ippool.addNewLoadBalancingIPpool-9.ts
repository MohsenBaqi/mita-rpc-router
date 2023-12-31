/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface IppoolAddNewLoadBalancingIPpool {
  method: 'ippool.addNewLoadBalancingIPpool'
  auth_type?: 'ADMIN'
  ippool_name: string
  ippool_comment: string
  balancing_strategy: 'distributive' | 'fill_first'
  children_ippool_percentages: {
    [k: string]: unknown
  }
}
