/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface OnlinePaymentAddGateway {
  method: "online_payment.addGateway";
  auth_type?: "ADMIN";
  gateway_name: string;
  gateway_type:
    | "Eghtesad_Novin"
    | "Mellat-Shaparak"
    | "Melli-shahparak"
    | "Parsian"
    | "Pasargad"
    | "Saman"
    | "Tejarat"
    | "ZarinPal";
  owner_isp_name: string;
  priority: number;
  comment: string;
  attributes: {
    [k: string]: unknown;
  };
}