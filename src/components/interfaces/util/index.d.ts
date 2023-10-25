import { UtilAfeChangeUserCredit } from './util.afeChangeUserCredit-6'
import { UtilAfeGetAllGroups } from './util.afeGetAllGroups-5'
import { UtilAfeGetUserInfo } from './util.afeGetUserInfo-4'
import { UtilCreateSessionForFailedUserByIP } from './util.createSessionForFailedUserByIP-9'
import { UtilCreateSessionForUserByIP } from './util.createSessionForUserByIP-10'
import { UtilDeleteSavedReport } from './util.deleteSavedReport-21'
import { UtilEcho } from './util.echo-14'
import { UtilGetDRBDStatus } from './util.getDRBDStatus-19'
import { UtilGetErrorForFailedUser } from './util.getErrorForFailedUser-11'
import { UtilGetISPsPageStyleRevision } from './util.getISPsPageStyleRevision-17'
import { UtilGetNow } from './util.getNow-3'
import { UtilGetSavedReportList } from './util.getSavedReportList-20'
import { UtilGetSessionISPID } from './util.getSessionISPID-15'
import { UtilGetSessionISPID as UtilGetSessionISPID2 } from './util.getSessionISPID-16'
import { UtilGetSessionPageStyle } from './util.getSessionPageStyle-18'
import { UtilGetStartOfMonth } from './util.getStartOfMonth-2'
import { UtilGetUserIDForIP } from './util.getUserIDForIP-7'
import { UtilGetUsernameForIP } from './util.getUsernameForIP-8'
import { UtilKickFailedUserByIP } from './util.kickFailedUserByIP-12'
import { UtilKickIDLEUsersByIP } from './util.kickIDLEUsersByIP-13'
import { UtilMultiStrGetAll } from './util.multiStrGetAll-0'
import { UtilRunDebugCode } from './util.runDebugCode-1'
import { UtilVersion } from './util.version-22'

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
  | UtilVersion

export default util
