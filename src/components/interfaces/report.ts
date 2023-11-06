import { ReportAutoCleanReports } from './content/report/report.autoCleanReports-32'
import { ReportDelReports } from './content/report/report.delReports-31'
import { ReportGetAutoCleanDates } from './content/report/report.getAutoCleanDates-33'
import { ReportGetCallerIDUsages } from './content/report/report.getCallerIDUsages-19'
import { ReportGetConnectionUsages } from './content/report/report.getConnectionUsages-16'
import { ReportGetConnections } from './content/report/report.getConnections-4'
import { ReportGetConnections as ReportGetConnections2 } from './content/report/report.getConnections-5'
import { ReportGetCreditChanges } from './content/report/report.getCreditChanges-20'
import { ReportGetCreditChanges as ReportGetCreditChanges2 } from './content/report/report.getCreditChanges-21'
import { ReportGetCreditChanges as ReportGetCreditChanges3 } from './content/report/report.getCreditChanges-22'
import { ReportGetCreditUsages } from './content/report/report.getCreditUsages-14'
import { ReportGetDayNightUsage } from './content/report/report.getDayNightUsage-41'
import { ReportGetDurationUsages } from './content/report/report.getDurationUsages-15'
import { ReportGetDurations } from './content/report/report.getDurations-7'
import { ReportGetExpiredUsers } from './content/report/report.getExpiredUsers-17'
import { ReportGetGroupUsages } from './content/report/report.getGroupUsages-8'
import { ReportGetINConnections } from './content/report/report.getINConnections-6'
import { ReportGetISPDepositChangeLogs } from './content/report/report.getISPDepositChangeLogs-29'
import { ReportGetISPUsages } from './content/report/report.getISPUsages-12'
import { ReportGetInOutUsages } from './content/report/report.getInOutUsages-13'
import { ReportGetManagementSummaryReport } from './content/report/report.getManagementSummaryReport-34'
import { ReportGetOnlinePaymentReport } from './content/report/report.getOnlinePaymentReport-36'
import { ReportGetOnlineUsers } from './content/report/report.getOnlineUsers-0'
import { ReportGetOnlineUsersCount } from './content/report/report.getOnlineUsersCount-2'
import { ReportGetOnlineUsersCountLoop } from './content/report/report.getOnlineUsersCountLoop-1'
import { ReportGetOnlineUsersCountPerISP } from './content/report/report.getOnlineUsersCountPerISP-3'
import { ReportGetPrefixNameUsage } from './content/report/report.getPrefixNameUsage-18'
import { ReportGetRasUsages } from './content/report/report.getRasUsages-9'
import { ReportGetRequestCount } from './content/report/report.getRequestCount-27'
import { ReportGetRequestTopStats } from './content/report/report.getRequestTopStats-28'
import { ReportGetSuccessfulCounts } from './content/report/report.getSuccessfulCounts-11'
import { ReportGetSystemAuditLogs } from './content/report/report.getSystemAuditLogs-35'
import { ReportGetTemporaryExtendLogs } from './content/report/report.getTemporaryExtendLogs-30'
import { ReportGetUserAuditLogs } from './content/report/report.getUserAuditLogs-26'
import { ReportGetUserDepositChanges } from './content/report/report.getUserDepositChanges-24'
import { ReportGetUserDepositChanges as ReportGetUserDepositChanges2 } from './content/report/report.getUserDepositChanges-25'
import { ReportGetVoIPDisconnectCauses } from './content/report/report.getVoIPDisconnectCauses-10'
import { ReportSaveConnectionUsages } from './content/report/report.saveConnectionUsages-38'
import { ReportSaveConnections } from './content/report/report.saveConnections-37'
import { ReportSaveCreditChanges } from './content/report/report.saveCreditChanges-23'
import { ReportSaveOnlinePaymentReport } from './content/report/report.saveOnlinePaymentReport-40'
import { ReportSavePrefixNameUsage } from './content/report/report.savePrefixNameUsage-39'

type report =
  | ReportAutoCleanReports
  | ReportDelReports
  | ReportGetAutoCleanDates
  | ReportGetCallerIDUsages
  | ReportGetConnectionUsages
  | ReportGetConnections
  | ReportGetConnections2
  | ReportGetCreditChanges
  | ReportGetCreditChanges2
  | ReportGetCreditChanges3
  | ReportGetCreditUsages
  | ReportGetDayNightUsage
  | ReportGetDurationUsages
  | ReportGetDurations
  | ReportGetExpiredUsers
  | ReportGetGroupUsages
  | ReportGetINConnections
  | ReportGetISPDepositChangeLogs
  | ReportGetISPUsages
  | ReportGetInOutUsages
  | ReportGetManagementSummaryReport
  | ReportGetOnlinePaymentReport
  | ReportGetOnlineUsers
  | ReportGetOnlineUsersCount
  | ReportGetOnlineUsersCountLoop
  | ReportGetOnlineUsersCountPerISP
  | ReportGetPrefixNameUsage
  | ReportGetRasUsages
  | ReportGetRequestCount
  | ReportGetRequestTopStats
  | ReportGetSuccessfulCounts
  | ReportGetSystemAuditLogs
  | ReportGetTemporaryExtendLogs
  | ReportGetUserAuditLogs
  | ReportGetUserDepositChanges
  | ReportGetUserDepositChanges2
  | ReportGetVoIPDisconnectCauses
  | ReportSaveConnectionUsages
  | ReportSaveConnections
  | ReportSaveCreditChanges
  | ReportSaveOnlinePaymentReport
  | ReportSavePrefixNameUsage

export default report
