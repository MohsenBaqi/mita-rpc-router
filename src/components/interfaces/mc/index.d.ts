import { McActivateService } from "./mc.activateService-21";
import { McAddNewEPGroupToProvider } from "./mc.addNewEPGroupToProvider-10";
import { McAddNewProvider } from "./mc.addNewProvider-5";
import { McAdminCancelScheduledMessages } from "./mc.adminCancelScheduledMessages-39";
import { McAdminDeleteMessage } from "./mc.adminDeleteMessage-37";
import { McAdminEnqueueSend } from "./mc.adminEnqueueSend-19";
import { McAdminEnqueueSend as McAdminEnqueueSend2 } from "./mc.adminEnqueueSend-20";
import { McAdminSearchQueuedMessage } from "./mc.adminSearchQueuedMessage-31";
import { McAdminSearchReceivedMessage } from "./mc.adminSearchReceivedMessage-26";
import { McAdminSearchReceivedMessage as McAdminSearchReceivedMessage2 } from "./mc.adminSearchReceivedMessage-27";
import { McAdminSearchSentMessage } from "./mc.adminSearchSentMessage-29";
import { McAdminSearchSentMessage as McAdminSearchSentMessage2 } from "./mc.adminSearchSentMessage-30";
import { McCheckActivationCode } from "./mc.checkActivationCode-23";
import { McDialerDeleteMessage } from "./mc.dialerDeleteMessage-35";
import { McEnqueueSend } from "./mc.enqueueSend-17";
import { McEnqueueSend as McEnqueueSend2 } from "./mc.enqueueSend-18";
import { McGetActiveMSGTypes } from "./mc.getActiveMSGTypes-1";
import { McGetAllActiveProviders } from "./mc.getAllActiveProviders-7";
import { McGetAllEPGroupsOfProvider } from "./mc.getAllEPGroupsOfProvider-11";
import { McGetAllMSGTypes } from "./mc.getAllMSGTypes-0";
import { McGetEPGroupUsageInfo } from "./mc.getEPGroupUsageInfo-15";
import { McGetProviderAttrsByName } from "./mc.getProviderAttrsByName-4";
import { McGetProviderInfoByName } from "./mc.getProviderInfoByName-3";
import { McGetProviderTypes } from "./mc.getProviderTypes-2";
import { McGetProviderUnassignedEPs } from "./mc.getProviderUnassignedEPs-12";
import { McGetRemoteRequestAttrs } from "./mc.getRemoteRequestAttrs-42";
import { McGetUserActivationNumber } from "./mc.getUserActivationNumber-24";
import { McGetUserLastMessageID } from "./mc.getUserLastMessageID-34";
import { McReceive } from "./mc.receive-16";
import { McRemoveEPGroupFromProvider } from "./mc.removeEPGroupFromProvider-14";
import { McRemoveProvider } from "./mc.removeProvider-8";
import { McResetProviderAttrs } from "./mc.resetProviderAttrs-9";
import { McResetUserActivationCode } from "./mc.resetUserActivationCode-22";
import { McUnAssingAllFromGroup } from "./mc.unAssingAllFromGroup-13";
import { McUpdateAdminRemoteRequestAttrs } from "./mc.updateAdminRemoteRequestAttrs-40";
import { McUpdateProviderAttrs } from "./mc.updateProviderAttrs-6";
import { McUpdateUserRemoteRequestAttrs } from "./mc.updateUserRemoteRequestAttrs-41";
import { McUserCancelScheduledMessages } from "./mc.userCancelScheduledMessages-38";
import { McUserDeleteMessage } from "./mc.userDeleteMessage-36";
import { McUserSearchMessagesForDialer } from "./mc.userSearchMessagesForDialer-33";
import { McUserSearchQueuedMessage } from "./mc.userSearchQueuedMessage-32";
import { McUserSearchReceivedMessage } from "./mc.userSearchReceivedMessage-25";
import { McUserSearchSentMessage } from "./mc.userSearchSentMessage-28";

type mc =
  | McActivateService
  | McAddNewEPGroupToProvider
  | McAddNewProvider
  | McAdminCancelScheduledMessages
  | McAdminDeleteMessage
  | McAdminEnqueueSend
  | McAdminEnqueueSend2
  | McAdminSearchQueuedMessage
  | McAdminSearchReceivedMessage
  | McAdminSearchReceivedMessage2
  | McAdminSearchSentMessage
  | McAdminSearchSentMessage2
  | McCheckActivationCode
  | McDialerDeleteMessage
  | McEnqueueSend
  | McEnqueueSend2
  | McGetActiveMSGTypes
  | McGetAllActiveProviders
  | McGetAllEPGroupsOfProvider
  | McGetAllMSGTypes
  | McGetEPGroupUsageInfo
  | McGetProviderAttrsByName
  | McGetProviderInfoByName
  | McGetProviderTypes
  | McGetProviderUnassignedEPs
  | McGetRemoteRequestAttrs
  | McGetUserActivationNumber
  | McGetUserLastMessageID
  | McReceive
  | McRemoveEPGroupFromProvider
  | McRemoveProvider
  | McResetProviderAttrs
  | McResetUserActivationCode
  | McUnAssingAllFromGroup
  | McUpdateAdminRemoteRequestAttrs
  | McUpdateProviderAttrs
  | McUpdateUserRemoteRequestAttrs
  | McUserCancelScheduledMessages
  | McUserDeleteMessage
  | McUserSearchMessagesForDialer
  | McUserSearchQueuedMessage
  | McUserSearchReceivedMessage
  | McUserSearchSentMessage;

export default mc;
