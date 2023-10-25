import { AdminAddNewAdmin } from "./admin.addNewAdmin-0";
import { AdminChangePassword } from "./admin.changePassword-3";
import { AdminDeleteAdmin } from "./admin.deleteAdmin-8";
import { AdminExpireAllAdminOTPs } from "./admin.expireAllAdminOTPs-11";
import { AdminGenerateOTP } from "./admin.generateOTP-9";
import { AdminGetAdminISPID } from "./admin.getAdminISPID-2";
import { AdminGetAdminInfo } from "./admin.getAdminInfo-1";
import { AdminGetAllAdminInfos } from "./admin.getAllAdminInfos-6";
import { AdminGetAllAdminUsernames } from "./admin.getAllAdminUsernames-4";
import { AdminGetAllAdminUsernames as AdminGetAllAdminUsernames2 } from "./admin.getAllAdminUsernames-5";
import { AdminSearchOTPs } from "./admin.searchOTPs-10";
import { AdminUpdateAdminInfo } from "./admin.updateAdminInfo-7";

type admin =
  | AdminAddNewAdmin
  | AdminChangePassword
  | AdminDeleteAdmin
  | AdminExpireAllAdminOTPs
  | AdminGenerateOTP
  | AdminGetAdminISPID
  | AdminGetAdminInfo
  | AdminGetAllAdminInfos
  | AdminGetAllAdminUsernames
  | AdminGetAllAdminUsernames2
  | AdminSearchOTPs
  | AdminUpdateAdminInfo;

export default admin;
