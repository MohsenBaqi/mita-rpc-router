import { NotificationAddNotificationProfile } from "./content/notification/notification.addNotificationProfile-2";
import { NotificationAddNotificationRule } from "./content/notification/notification.addNotificationRule-6";
import { NotificationDeleteNotificationProfile } from "./content/notification/notification.deleteNotificationProfile-5";
import { NotificationDeleteNotificationRule } from "./content/notification/notification.deleteNotificationRule-7";
import { NotificationGetNotificationProfileByName } from "./content/notification/notification.getNotificationProfileByName-4";
import { NotificationGetNotificationProfileNames } from "./content/notification/notification.getNotificationProfileNames-0";
import { NotificationGetNotificationProfiles } from "./content/notification/notification.getNotificationProfiles-1";
import { NotificationUpdateNotificationProfile } from "./content/notification/notification.updateNotificationProfile-3";
import { NotificationUpdateNotificationRule } from "./content/notification/notification.updateNotificationRule-8";

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
