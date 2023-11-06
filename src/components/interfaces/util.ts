import { UtilAfeChangeUserCredit } from "./content/util/util.afeChangeUserCredit-6";
import { UtilAfeGetAllGroups } from "./content/util/util.afeGetAllGroups-5";
import { UtilAfeGetUserInfo } from "./content/util/util.afeGetUserInfo-4";
import { UtilCreateSessionForFailedUserByIP } from "./content/util/util.createSessionForFailedUserByIP-9";
import { UtilCreateSessionForUserByIP } from "./content/util/util.createSessionForUserByIP-10";
import { UtilDeleteSavedReport } from "./content/util/util.deleteSavedReport-21";
import { UtilEcho } from "./content/util/util.echo-14";
import { UtilGetDRBDStatus } from "./content/util/util.getDRBDStatus-19";
import { UtilGetErrorForFailedUser } from "./content/util/util.getErrorForFailedUser-11";
import { UtilGetISPsPageStyleRevision } from "./content/util/util.getISPsPageStyleRevision-17";
import { UtilGetNow } from "./content/util/util.getNow-3";
import { UtilGetSavedReportList } from "./content/util/util.getSavedReportList-20";
import { UtilGetSessionISPID } from "./content/util/util.getSessionISPID-15";
import { UtilGetSessionISPID as UtilGetSessionISPID2 } from "./content/util/util.getSessionISPID-16";
import { UtilGetSessionPageStyle } from "./content/util/util.getSessionPageStyle-18";
import { UtilGetStartOfMonth } from "./content/util/util.getStartOfMonth-2";
import { UtilGetUserIDForIP } from "./content/util/util.getUserIDForIP-7";
import { UtilGetUsernameForIP } from "./content/util/util.getUsernameForIP-8";
import { UtilKickFailedUserByIP } from "./content/util/util.kickFailedUserByIP-12";
import { UtilKickIDLEUsersByIP } from "./content/util/util.kickIDLEUsersByIP-13";
import { UtilMultiStrGetAll } from "./content/util/util.multiStrGetAll-0";
import { UtilRunDebugCode } from "./content/util/util.runDebugCode-1";
import { UtilVersion } from "./content/util/util.version-22";

type util =
  | UtilAfeChangeUserCredit
  | UtilAfeGetAllGroups
  | UtilAfeGetUserInfo
  | UtilCreateSessionForFailedUserByIP
  | UtilCreateSessionForUserByIP
  | UtilDeleteSavedReport
  | UtilEcho
  | UtilGetDRBDStatus
  | UtilGetErrorForFailedUser
  | UtilGetISPsPageStyleRevision
  | UtilGetNow
  | UtilGetSavedReportList
  | UtilGetSessionISPID
  | UtilGetSessionISPID2
  | UtilGetSessionPageStyle
  | UtilGetStartOfMonth
  | UtilGetUserIDForIP
  | UtilGetUsernameForIP
  | UtilKickFailedUserByIP
  | UtilKickIDLEUsersByIP
  | UtilMultiStrGetAll
  | UtilRunDebugCode
  | UtilVersion;

export default util;
