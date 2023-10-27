import SystemNotification from './SystemNotification'
import admin from './admin'
import bw from './bw'
import charge from './charge'
import extra_charge from './extra_charge'
import group from './group'
import invoice from './invoice'
import ippool from './ippool'
import isp from './isp'
import ldap from './ldap'
import log_console from './log_console'
import login from './login'
import mc from './mc'
import notification from './notification'
import online_payment from './online_payment'
import perm from './perm'
import ras from './ras'
import report from './report'
import session from './session'
import snapshot from './snapshot'
import stat from './stat'
import telephony_support from './telephony_support'
import user from './user'
import user_custom_field from './user_custom_field'
import util from './util'
import voip_provider from './voip_provider'
import voucher from './voucher'

type interfaces =
  | SystemNotification
  | admin
  | bw
  | charge
  | extra_charge
  | group
  | invoice
  | ippool
  | isp
  | ldap
  | log_console
  | login
  | mc
  | notification
  | online_payment
  | perm
  | ras
  | report
  | session
  | snapshot
  | stat
  | telephony_support
  | user
  | user_custom_field
  | util
  | voip_provider
  | voucher

export default interfaces
