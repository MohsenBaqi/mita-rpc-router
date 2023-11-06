import { TelephonySupportAuthenticate } from "./content/telephony_support/telephony_support.authenticate-1";
import { TelephonySupportCallerIDAuthenticate } from "./content/telephony_support/telephony_support.callerIDAuthenticate-0";
import { TelephonySupportChangeInternetPassword } from "./content/telephony_support/telephony_support.changeInternetPassword-9";
import { TelephonySupportCheckInternetPassword } from "./content/telephony_support/telephony_support.checkInternetPassword-8";
import { TelephonySupportGetCurrentCredit } from "./content/telephony_support/telephony_support.getCurrentCredit-2";
import { TelephonySupportGetFailureReason } from "./content/telephony_support/telephony_support.getFailureReason-5";
import { TelephonySupportGetLastConnection } from "./content/telephony_support/telephony_support.getLastConnection-6";
import { TelephonySupportGetNearestExpDate } from "./content/telephony_support/telephony_support.getNearestExpDate-4";
import { TelephonySupportGetRemainingByteDuration } from "./content/telephony_support/telephony_support.getRemainingByteDuration-3";
import { TelephonySupportRecharge } from "./content/telephony_support/telephony_support.recharge-7";

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
  | TelephonySupportRecharge;

export default telephony_support;
