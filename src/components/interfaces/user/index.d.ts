import { UserAddNewUsers } from "./user.addNewUsers-0";
import { UserBulkChangeUserCredit } from "./user.bulkChangeUserCredit-34";
import { UserBulkChangeUserDeposit } from "./user.bulkChangeUserDeposit-35";
import { UserBulkDeleteUser } from "./user.bulkDeleteUser-36";
import { UserBulkKillUsers } from "./user.bulkKillUsers-38";
import { UserBulkRenewUsers } from "./user.bulkRenewUsers-37";
import { UserBulkUpdateUserAttrs } from "./user.bulkUpdateUserAttrs-33";
import { UserCancelBulkAction } from "./user.cancelBulkAction-31";
import { UserChangeCredit } from "./user.changeCredit-5";
import { UserChangeCreditExtended } from "./user.changeCreditExtended-6";
import { UserChangeDeposit } from "./user.changeDeposit-7";
import { UserChangeDepositExtended } from "./user.changeDepositExtended-8";
import { UserChangeStatus } from "./user.changeStatus-28";
import { UserClearBulkAction } from "./user.clearBulkAction-32";
import { UserDelUser } from "./user.delUser-15";
import { UserDoesUserExists } from "./user.doesUserExists-3";
import { UserGetBulkActionsForAdmin } from "./user.getBulkActionsForAdmin-29";
import { UserGetRemainingDurationAndBytes } from "./user.getRemainingDurationAndBytes-20";
import { UserGetRemainingDurationAndBytes as UserGetRemainingDurationAndBytes2 } from "./user.getRemainingDurationAndBytes-21";
import { UserGetUserInfo } from "./user.getUserInfo-1";
import { UserGetUserInfo as UserGetUserInfo2 } from "./user.getUserInfo-2";
import { UserGetUsersExpDateFirstLogin } from "./user.getUsersExpDateFirstLogin-39";
import { UserGetUsersWithCellPhone } from "./user.getUsersWithCellPhone-10";
import { UserGetUsersWithPhone } from "./user.getUsersWithPhone-9";
import { UserKillMe } from "./user.killMe-19";
import { UserKillUser } from "./user.killUser-16";
import { UserKillUserByID } from "./user.killUserByID-17";
import { UserKillUserByID as UserKillUserByID2 } from "./user.killUserByID-18";
import { UserRechargeUsers } from "./user.rechargeUsers-23";
import { UserReloadUsers } from "./user.reloadUsers-26";
import { UserRenewUsers } from "./user.renewUsers-22";
import { UserSaveSearchExpiredUsers } from "./user.saveSearchExpiredUsers-13";
import { UserSaveSearchUser } from "./user.saveSearchUser-27";
import { UserSearchExpiredUsers } from "./user.searchExpiredUsers-11";
import { UserSearchExpiredUsersExtended } from "./user.searchExpiredUsersExtended-12";
import { UserSearchUser } from "./user.searchUser-14";
import { UserSetFeshfesheParams } from "./user.setFeshfesheParams-41";
import { UserSetOneChargeRuleUsage } from "./user.setOneChargeRuleUsage-40";
import { UserTemporaryExtendUsers } from "./user.temporaryExtendUsers-24";
import { UserUpdateUserAttrs } from "./user.updateUserAttrs-4";
import { UserUpdateUserComments } from "./user.updateUserComments-25";
import { UserViewBulkActionStatus } from "./user.viewBulkActionStatus-30";

type user =
  | UserAddNewUsers
  | UserBulkChangeUserCredit
  | UserBulkChangeUserDeposit
  | UserBulkDeleteUser
  | UserBulkKillUsers
  | UserBulkRenewUsers
  | UserBulkUpdateUserAttrs
  | UserCancelBulkAction
  | UserChangeCredit
  | UserChangeCreditExtended
  | UserChangeDeposit
  | UserChangeDepositExtended
  | UserChangeStatus
  | UserClearBulkAction
  | UserDelUser
  | UserDoesUserExists
  | UserGetBulkActionsForAdmin
  | UserGetRemainingDurationAndBytes
  | UserGetRemainingDurationAndBytes2
  | UserGetUserInfo
  | UserGetUserInfo2
  | UserGetUsersExpDateFirstLogin
  | UserGetUsersWithCellPhone
  | UserGetUsersWithPhone
  | UserKillMe
  | UserKillUser
  | UserKillUserByID
  | UserKillUserByID2
  | UserRechargeUsers
  | UserReloadUsers
  | UserRenewUsers
  | UserSaveSearchExpiredUsers
  | UserSaveSearchUser
  | UserSearchExpiredUsers
  | UserSearchExpiredUsersExtended
  | UserSearchUser
  | UserSetFeshfesheParams
  | UserSetOneChargeRuleUsage
  | UserTemporaryExtendUsers
  | UserUpdateUserAttrs
  | UserUpdateUserComments
  | UserViewBulkActionStatus;

export default user;
