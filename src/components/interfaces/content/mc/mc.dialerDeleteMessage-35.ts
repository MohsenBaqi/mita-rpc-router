/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface McDialerDeleteMessage {
  method: 'mc.dialerDeleteMessage'
  auth_type?: 'NORMAL_USER' | 'VOIP_USER'
  message_id: number
}
