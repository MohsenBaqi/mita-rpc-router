import { RasAddIPpoolToRas } from "./content/ras/ras.addIPpoolToRas-15";
import { RasAddNewRas } from "./content/ras/ras.addNewRas-0";
import { RasDeActiveRas } from "./content/ras/ras.deActiveRas-11";
import { RasDelIPpoolFromRas } from "./content/ras/ras.delIPpoolFromRas-16";
import { RasDeleteRas } from "./content/ras/ras.deleteRas-12";
import { RasGetActiveRasIPs } from "./content/ras/ras.getActiveRasIPs-2";
import { RasGetActiveRasIPs as RasGetActiveRasIPs2 } from "./content/ras/ras.getActiveRasIPs-3";
import { RasGetInActiveRases } from "./content/ras/ras.getInActiveRases-5";
import { RasGetRasAttributes } from "./content/ras/ras.getRasAttributes-7";
import { RasGetRasDescriptions } from "./content/ras/ras.getRasDescriptions-4";
import { RasGetRasIPpools } from "./content/ras/ras.getRasIPpools-14";
import { RasGetRasInfo } from "./content/ras/ras.getRasInfo-1";
import { RasGetRasTypes } from "./content/ras/ras.getRasTypes-6";
import { RasReActiveRas } from "./content/ras/ras.reActiveRas-13";
import { RasResetAttributes } from "./content/ras/ras.resetAttributes-10";
import { RasUpdateAttributes } from "./content/ras/ras.updateAttributes-9";
import { RasUpdateRasInfo } from "./content/ras/ras.updateRasInfo-8";

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
