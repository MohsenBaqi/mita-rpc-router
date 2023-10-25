import { RasAddIPpoolToRas } from "./ras.addIPpoolToRas-15";
import { RasAddNewRas } from "./ras.addNewRas-0";
import { RasDeActiveRas } from "./ras.deActiveRas-11";
import { RasDelIPpoolFromRas } from "./ras.delIPpoolFromRas-16";
import { RasDeleteRas } from "./ras.deleteRas-12";
import { RasGetActiveRasIPs } from "./ras.getActiveRasIPs-2";
import { RasGetActiveRasIPs as RasGetActiveRasIPs2 } from "./ras.getActiveRasIPs-3";
import { RasGetInActiveRases } from "./ras.getInActiveRases-5";
import { RasGetRasAttributes } from "./ras.getRasAttributes-7";
import { RasGetRasDescriptions } from "./ras.getRasDescriptions-4";
import { RasGetRasIPpools } from "./ras.getRasIPpools-14";
import { RasGetRasInfo } from "./ras.getRasInfo-1";
import { RasGetRasTypes } from "./ras.getRasTypes-6";
import { RasReActiveRas } from "./ras.reActiveRas-13";
import { RasResetAttributes } from "./ras.resetAttributes-10";
import { RasUpdateAttributes } from "./ras.updateAttributes-9";
import { RasUpdateRasInfo } from "./ras.updateRasInfo-8";

type ras =
  | RasAddIPpoolToRas
  | RasAddNewRas
  | RasDeActiveRas
  | RasDelIPpoolFromRas
  | RasDeleteRas
  | RasGetActiveRasIPs
  | RasGetActiveRasIPs2
  | RasGetInActiveRases
  | RasGetRasAttributes
  | RasGetRasDescriptions
  | RasGetRasIPpools
  | RasGetRasInfo
  | RasGetRasTypes
  | RasReActiveRas
  | RasResetAttributes
  | RasUpdateAttributes
  | RasUpdateRasInfo;

export default ras;
