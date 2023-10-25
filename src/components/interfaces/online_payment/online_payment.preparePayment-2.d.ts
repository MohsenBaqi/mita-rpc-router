/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface OnlinePaymentPreparePayment {
  method: 'online_payment.preparePayment'
  auth_type: 'ADMIN' | 'NORMAL_USER' | 'VOIP_USER'
  gateway_type:
    | 'Melli-shahparak'
    | 'Eghtesad_Novin'
    | 'Mellat-Shaparak'
    | 'Parsian'
    | 'Pasargad'
    | 'Saman'
    | 'Tejarat'
    | 'ZarinPal'
  amount: number
  unique_id: string
  callback_url: string
  attributes: unknown
}
