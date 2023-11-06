import { SystemNotificationChangeNotificationStatus } from "./content/SystemNotification/SystemNotification.changeNotificationStatus-1";
import { SystemNotificationGetNotifications } from "./content/SystemNotification/SystemNotification.getNotifications-0";

type SystemNotification =
  | SystemNotificationChangeNotificationStatus
  | SystemNotificationGetNotifications;

export default SystemNotification;
