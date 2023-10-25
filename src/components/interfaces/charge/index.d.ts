import { ChargeAddNewCharge } from "./charge.addNewCharge-2";
import { ChargeAddNewChargeRule } from "./charge.addNewChargeRule-7";
import { ChargeCopyCharge } from "./charge.copyCharge-3";
import { ChargeCopyCharge as ChargeCopyCharge2 } from "./charge.copyCharge-4";
import { ChargeDeleteCharge } from "./charge.deleteCharge-6";
import { ChargeDeleteChargeRule } from "./charge.deleteChargeRule-9";
import { ChargeGetChargeInfo } from "./charge.getChargeInfo-1";
import { ChargeListCharges } from "./charge.listCharges-0";
import { ChargeUpdateCharge } from "./charge.updateCharge-5";
import { ChargeUpdateChargeRule } from "./charge.updateChargeRule-8";
import { ChargeUpdateChargeRuleAttrs } from "./charge.updateChargeRuleAttrs-10";

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
  | ChargeUpdateChargeRuleAttrs;

export default charge;
