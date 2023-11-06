import { ChargeAddNewCharge } from './content/charge/charge.addNewCharge-2'
import { ChargeAddNewChargeRule } from './content/charge/charge.addNewChargeRule-7'
import { ChargeCopyCharge } from './content/charge/charge.copyCharge-3'
import { ChargeCopyCharge as ChargeCopyCharge2 } from './content/charge/charge.copyCharge-4'
import { ChargeDeleteCharge } from './content/charge/charge.deleteCharge-6'
import { ChargeDeleteChargeRule } from './content/charge/charge.deleteChargeRule-9'
import { ChargeGetChargeInfo } from './content/charge/charge.getChargeInfo-1'
import { ChargeListCharges } from './content/charge/charge.listCharges-0'
import { ChargeUpdateCharge } from './content/charge/charge.updateCharge-5'
import { ChargeUpdateChargeRule } from './content/charge/charge.updateChargeRule-8'
import { ChargeUpdateChargeRuleAttrs } from './content/charge/charge.updateChargeRuleAttrs-10'

type charge =
  | ChargeAddNewCharge
  | ChargeAddNewChargeRule
  | ChargeCopyCharge
  | ChargeCopyCharge2
  | ChargeDeleteCharge
  | ChargeDeleteChargeRule
  | ChargeGetChargeInfo
  | ChargeListCharges
  | ChargeUpdateCharge
  | ChargeUpdateChargeRule
  | ChargeUpdateChargeRuleAttrs

export default charge
