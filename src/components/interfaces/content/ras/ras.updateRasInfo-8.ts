/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface RasUpdateRasInfo {
  method: 'ras.updateRasInfo'
  auth_type?: 'ADMIN'
  ras_id: number
  ras_ip: string
  ras_type: 'ACS2' | 'Cisco-IN' | 'CiscoVPDN' | 'Generic' | 'Huawei' | 'Mikrotik' | 'Ruckus' | 'ZTE'
  radius_secret: string
  ras_description: string
  comment: string
}
