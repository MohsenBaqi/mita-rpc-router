import { UserAddNewUsers } from './content/user/user.addNewUsers-0'
import { UserBulkChangeUserCredit } from './content/user/user.bulkChangeUserCredit-34'
import { UserBulkChangeUserDeposit } from './content/user/user.bulkChangeUserDeposit-35'
import { UserBulkDeleteUser } from './content/user/user.bulkDeleteUser-36'
import { UserBulkKillUsers } from './content/user/user.bulkKillUsers-38'
import { UserBulkRenewUsers } from './content/user/user.bulkRenewUsers-37'
import { UserBulkUpdateUserAttrs } from './content/user/user.bulkUpdateUserAttrs-33'
import { UserCancelBulkAction } from './content/user/user.cancelBulkAction-31'
import { UserChangeCredit } from './content/user/user.changeCredit-5'
import { UserChangeCreditExtended } from './content/user/user.changeCreditExtended-6'
import { UserChangeDeposit } from './content/user/user.changeDeposit-7'
import { UserChangeDepositExtended } from './content/user/user.changeDepositExtended-8'
import { UserChangeStatus } from './content/user/user.changeStatus-28'
import { UserClearBulkAction } from './content/user/user.clearBulkAction-32'
import { UserDelUser } from './content/user/user.delUser-15'
import { UserDoesUserExists } from './content/user/user.doesUserExists-3'
import { UserGetBulkActionsForAdmin } from './content/user/user.getBulkActionsForAdmin-29'
import { UserGetRemainingDurationAndBytes } from './content/user/user.getRemainingDurationAndBytes-20'
import { UserGetRemainingDurationAndBytes as UserGetRemainingDurationAndBytes2 } from './content/user/user.getRemainingDurationAndBytes-21'
import { UserGetUserInfo } from './content/user/user.getUserInfo-1'
import { UserGetUserInfo as UserGetUserInfo2 } from './content/user/user.getUserInfo-2'
import { UserGetUsersExpDateFirstLogin } from './content/user/user.getUsersExpDateFirstLogin-39'
import { UserGetUsersWithCellPhone } from './content/user/user.getUsersWithCellPhone-10'
import { UserGetUsersWithPhone } from './content/user/user.getUsersWithPhone-9'
import { UserKillMe } from './content/user/user.killMe-19'
import { UserKillUser } from './content/user/user.killUser-16'
import { UserKillUserByID } from './content/user/user.killUserByID-17'
import { UserKillUserByID as UserKillUserByID2 } from './content/user/user.killUserByID-18'
import { UserRechargeUsers } from './content/user/user.rechargeUsers-23'
import { UserReloadUsers } from './content/user/user.reloadUsers-26'
import { UserRenewUsers } from './content/user/user.renewUsers-22'
import { UserSaveSearchExpiredUsers } from './content/user/user.saveSearchExpiredUsers-13'
import { UserSaveSearchUser } from './content/user/user.saveSearchUser-27'
import { UserSearchExpiredUsers } from './content/user/user.searchExpiredUsers-11'
import { UserSearchExpiredUsersExtended } from './content/user/user.searchExpiredUsersExtended-12'
import { UserSearchUser } from './content/user/user.searchUser-14'
import { UserSetFeshfesheParams } from './content/user/user.setFeshfesheParams-41'
import { UserSetOneChargeRuleUsage } from './content/user/user.setOneChargeRuleUsage-40'
import { UserTemporaryExtendUsers } from './content/user/user.temporaryExtendUsers-24'
import { UserUpdateUserAttrs } from './content/user/user.updateUserAttrs-4'
import { UserUpdateUserComments } from './content/user/user.updateUserComments-25'
import { UserViewBulkActionStatus } from './content/user/user.viewBulkActionStatus-30'

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
  | UserViewBulkActionStatus

export default user
