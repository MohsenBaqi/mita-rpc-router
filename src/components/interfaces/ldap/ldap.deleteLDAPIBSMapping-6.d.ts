/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface LdapDeleteLDAPIBSMapping {
  method: 'ldap.deleteLDAPIBSMapping'
  auth_type: 'ADMIN'
  domain: string
  ldap_attribute: string
  IBS_field: string
  sync: boolean
}
