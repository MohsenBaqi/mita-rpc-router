/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface McUpdateProviderAttrs {
  method: 'mc.updateProviderAttrs'
  auth_type?: 'ADMIN'
  provider_name: string
  to_update_attrs: {
    [k: string]: unknown
  }
}
