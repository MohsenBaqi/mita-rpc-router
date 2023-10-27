import { TelephonySupportAuthenticate } from './telephony_support.authenticate-1'
import { TelephonySupportCallerIDAuthenticate } from './telephony_support.callerIDAuthenticate-0'
import { TelephonySupportChangeInternetPassword } from './telephony_support.changeInternetPassword-9'
import { TelephonySupportCheckInternetPassword } from './telephony_support.checkInternetPassword-8'
import { TelephonySupportGetCurrentCredit } from './telephony_support.getCurrentCredit-2'
import { TelephonySupportGetFailureReason } from './telephony_support.getFailureReason-5'
import { TelephonySupportGetLastConnection } from './telephony_support.getLastConnection-6'
import { TelephonySupportGetNearestExpDate } from './telephony_support.getNearestExpDate-4'
import { TelephonySupportGetRemainingByteDuration } from './telephony_support.getRemainingByteDuration-3'
import { TelephonySupportRecharge } from './telephony_support.recharge-7'

type telephony_support =
  | TelephonySupportAuthenticate
  | TelephonySupportCallerIDAuthenticate
  | TelephonySupportChangeInternetPassword
  | TelephonySupportCheckInternetPassword
  | TelephonySupportGetCurrentCredit
  | TelephonySupportGetFailureReason
  | TelephonySupportGetLastConnection
  | TelephonySupportGetNearestExpDate
  | TelephonySupportGetRemainingByteDuration
  | TelephonySupportRecharge

export default telephony_support
