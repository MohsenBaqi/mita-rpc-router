import { AdminAddNewAdmin } from "./content/admin/admin.addNewAdmin-0";
import { AdminChangePassword } from "./content/admin/admin.changePassword-3";
import { AdminDeleteAdmin } from "./content/admin/admin.deleteAdmin-8";
import { AdminExpireAllAdminOTPs } from "./content/admin/admin.expireAllAdminOTPs-11";
import { AdminGenerateOTP } from "./content/admin/admin.generateOTP-9";
import { AdminGetAdminISPID } from "./content/admin/admin.getAdminISPID-2";
import { AdminGetAdminInfo } from "./content/admin/admin.getAdminInfo-1";
import { AdminGetAllAdminInfos } from "./content/admin/admin.getAllAdminInfos-6";
import { AdminGetAllAdminUsernames } from "./content/admin/admin.getAllAdminUsernames-4";
import { AdminGetAllAdminUsernames as AdminGetAllAdminUsernames2 } from "./content/admin/admin.getAllAdminUsernames-5";
import { AdminSearchOTPs } from "./content/admin/admin.searchOTPs-10";
import { AdminUpdateAdminInfo } from "./content/admin/admin.updateAdminInfo-7";

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
