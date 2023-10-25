import { ReportAutoCleanReports } from "./report.autoCleanReports-32";
import { ReportDelReports } from "./report.delReports-31";
import { ReportGetAutoCleanDates } from "./report.getAutoCleanDates-33";
import { ReportGetCallerIDUsages } from "./report.getCallerIDUsages-19";
import { ReportGetConnectionUsages } from "./report.getConnectionUsages-16";
import { ReportGetConnections } from "./report.getConnections-4";
import { ReportGetConnections as ReportGetConnections2 } from "./report.getConnections-5";
import { ReportGetCreditChanges } from "./report.getCreditChanges-20";
import { ReportGetCreditChanges as ReportGetCreditChanges2 } from "./report.getCreditChanges-21";
import { ReportGetCreditChanges as ReportGetCreditChanges3 } from "./report.getCreditChanges-22";
import { ReportGetCreditUsages } from "./report.getCreditUsages-14";
import { ReportGetDayNightUsage } from "./report.getDayNightUsage-41";
import { ReportGetDurationUsages } from "./report.getDurationUsages-15";
import { ReportGetDurations } from "./report.getDurations-7";
import { ReportGetExpiredUsers } from "./report.getExpiredUsers-17";
import { ReportGetGroupUsages } from "./report.getGroupUsages-8";
import { ReportGetINConnections } from "./report.getINConnections-6";
import { ReportGetISPDepositChangeLogs } from "./report.getISPDepositChangeLogs-29";
import { ReportGetISPUsages } from "./report.getISPUsages-12";
import { ReportGetInOutUsages } from "./report.getInOutUsages-13";
import { ReportGetManagementSummaryReport } from "./report.getManagementSummaryReport-34";
import { ReportGetOnlinePaymentReport } from "./report.getOnlinePaymentReport-36";
import { ReportGetOnlineUsers } from "./report.getOnlineUsers-0";
import { ReportGetOnlineUsersCount } from "./report.getOnlineUsersCount-2";
import { ReportGetOnlineUsersCountLoop } from "./report.getOnlineUsersCountLoop-1";
import { ReportGetOnlineUsersCountPerISP } from "./report.getOnlineUsersCountPerISP-3";
import { ReportGetPrefixNameUsage } from "./report.getPrefixNameUsage-18";
import { ReportGetRasUsages } from "./report.getRasUsages-9";
import { ReportGetRequestCount } from "./report.getRequestCount-27";
import { ReportGetRequestTopStats } from "./report.getRequestTopStats-28";
import { ReportGetSuccessfulCounts } from "./report.getSuccessfulCounts-11";
import { ReportGetSystemAuditLogs } from "./report.getSystemAuditLogs-35";
import { ReportGetTemporaryExtendLogs } from "./report.getTemporaryExtendLogs-30";
import { ReportGetUserAuditLogs } from "./report.getUserAuditLogs-26";
import { ReportGetUserDepositChanges } from "./report.getUserDepositChanges-24";
import { ReportGetUserDepositChanges as ReportGetUserDepositChanges2 } from "./report.getUserDepositChanges-25";
import { ReportGetVoIPDisconnectCauses } from "./report.getVoIPDisconnectCauses-10";
import { ReportSaveConnectionUsages } from "./report.saveConnectionUsages-38";
import { ReportSaveConnections } from "./report.saveConnections-37";
import { ReportSaveCreditChanges } from "./report.saveCreditChanges-23";
import { ReportSaveOnlinePaymentReport } from "./report.saveOnlinePaymentReport-40";
import { ReportSavePrefixNameUsage } from "./report.savePrefixNameUsage-39";

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
  | ReportSavePrefixNameUsage;

export default report;
