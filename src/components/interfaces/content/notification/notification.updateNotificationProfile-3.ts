/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface NotificationUpdateNotificationProfile {
  method: 'notification.updateNotificationProfile'
  auth_type?: 'ADMIN'
  notification_profile_id: number
  notification_profile_name: string
  notification_profile_comment: string
}
