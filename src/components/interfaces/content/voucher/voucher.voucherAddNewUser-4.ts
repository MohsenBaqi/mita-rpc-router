/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface VoucherVoucherAddNewUser {
  method: "voucher.voucherAddNewUser";
  auth_type?: "ADMIN";
  voucher_pin: string;
  isp_name: string;
  group_name: string;
}
