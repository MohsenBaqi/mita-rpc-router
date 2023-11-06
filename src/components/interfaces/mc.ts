import { McActivateService } from "./content/mc/mc.activateService-21";
import { McAddNewEPGroupToProvider } from "./content/mc/mc.addNewEPGroupToProvider-10";
import { McAddNewProvider } from "./content/mc/mc.addNewProvider-5";
import { McAdminCancelScheduledMessages } from "./content/mc/mc.adminCancelScheduledMessages-39";
import { McAdminDeleteMessage } from "./content/mc/mc.adminDeleteMessage-37";
import { McAdminEnqueueSend } from "./content/mc/mc.adminEnqueueSend-19";
import { McAdminEnqueueSend as McAdminEnqueueSend2 } from "./content/mc/mc.adminEnqueueSend-20";
import { McAdminSearchQueuedMessage } from "./content/mc/mc.adminSearchQueuedMessage-31";
import { McAdminSearchReceivedMessage } from "./content/mc/mc.adminSearchReceivedMessage-26";
import { McAdminSearchReceivedMessage as McAdminSearchReceivedMessage2 } from "./content/mc/mc.adminSearchReceivedMessage-27";
import { McAdminSearchSentMessage } from "./content/mc/mc.adminSearchSentMessage-29";
import { McAdminSearchSentMessage as McAdminSearchSentMessage2 } from "./content/mc/mc.adminSearchSentMessage-30";
import { McCheckActivationCode } from "./content/mc/mc.checkActivationCode-23";
import { McDialerDeleteMessage } from "./content/mc/mc.dialerDeleteMessage-35";
import { McEnqueueSend } from "./content/mc/mc.enqueueSend-17";
import { McEnqueueSend as McEnqueueSend2 } from "./content/mc/mc.enqueueSend-18";
import { McGetActiveMSGTypes } from "./content/mc/mc.getActiveMSGTypes-1";
import { McGetAllActiveProviders } from "./content/mc/mc.getAllActiveProviders-7";
import { McGetAllEPGroupsOfProvider } from "./content/mc/mc.getAllEPGroupsOfProvider-11";
import { McGetAllMSGTypes } from "./content/mc/mc.getAllMSGTypes-0";
import { McGetEPGroupUsageInfo } from "./content/mc/mc.getEPGroupUsageInfo-15";
import { McGetProviderAttrsByName } from "./content/mc/mc.getProviderAttrsByName-4";
import { McGetProviderInfoByName } from "./content/mc/mc.getProviderInfoByName-3";
import { McGetProviderTypes } from "./content/mc/mc.getProviderTypes-2";
import { McGetProviderUnassignedEPs } from "./content/mc/mc.getProviderUnassignedEPs-12";
import { McGetRemoteRequestAttrs } from "./content/mc/mc.getRemoteRequestAttrs-42";
import { McGetUserActivationNumber } from "./content/mc/mc.getUserActivationNumber-24";
import { McGetUserLastMessageID } from "./content/mc/mc.getUserLastMessageID-34";
import { McReceive } from "./content/mc/mc.receive-16";
import { McRemoveEPGroupFromProvider } from "./content/mc/mc.removeEPGroupFromProvider-14";
import { McRemoveProvider } from "./content/mc/mc.removeProvider-8";
import { McResetProviderAttrs } from "./content/mc/mc.resetProviderAttrs-9";
import { McResetUserActivationCode } from "./content/mc/mc.resetUserActivationCode-22";
import { McUnAssingAllFromGroup } from "./content/mc/mc.unAssingAllFromGroup-13";
import { McUpdateAdminRemoteRequestAttrs } from "./content/mc/mc.updateAdminRemoteRequestAttrs-40";
import { McUpdateProviderAttrs } from "./content/mc/mc.updateProviderAttrs-6";
import { McUpdateUserRemoteRequestAttrs } from "./content/mc/mc.updateUserRemoteRequestAttrs-41";
import { McUserCancelScheduledMessages } from "./content/mc/mc.userCancelScheduledMessages-38";
import { McUserDeleteMessage } from "./content/mc/mc.userDeleteMessage-36";
import { McUserSearchMessagesForDialer } from "./content/mc/mc.userSearchMessagesForDialer-33";
import { McUserSearchQueuedMessage } from "./content/mc/mc.userSearchQueuedMessage-32";
import { McUserSearchReceivedMessage } from "./content/mc/mc.userSearchReceivedMessage-25";
import { McUserSearchSentMessage } from "./content/mc/mc.userSearchSentMessage-28";

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
