import { NotificationAddNotificationProfile } from "./notification.addNotificationProfile-2";
import { NotificationAddNotificationRule } from "./notification.addNotificationRule-6";
import { NotificationDeleteNotificationProfile } from "./notification.deleteNotificationProfile-5";
import { NotificationDeleteNotificationRule } from "./notification.deleteNotificationRule-7";
import { NotificationGetNotificationProfileByName } from "./notification.getNotificationProfileByName-4";
import { NotificationGetNotificationProfileNames } from "./notification.getNotificationProfileNames-0";
import { NotificationGetNotificationProfiles } from "./notification.getNotificationProfiles-1";
import { NotificationUpdateNotificationProfile } from "./notification.updateNotificationProfile-3";
import { NotificationUpdateNotificationRule } from "./notification.updateNotificationRule-8";

type notification =
  | NotificationAddNotificationProfile
  | NotificationAddNotificationRule
  | NotificationDeleteNotificationProfile
  | NotificationDeleteNotificationRule
  | NotificationGetNotificationProfileByName
  | NotificationGetNotificationProfileNames
  | NotificationGetNotificationProfiles
  | NotificationUpdateNotificationProfile
  | NotificationUpdateNotificationRule;

export default notification;
