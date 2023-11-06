import { IspAddNewISP } from "./content/isp/isp.addNewISP-0";
import { IspChangeISPDeposit } from "./content/isp/isp.changeISPDeposit-6";
import { IspDeleteISP } from "./content/isp/isp.deleteISP-7";
import { IspGetAllISPInfos } from "./content/isp/isp.getAllISPInfos-4";
import { IspGetAllISPMappedUserIDs } from "./content/isp/isp.getAllISPMappedUserIDs-9";
import { IspGetAllISPNames } from "./content/isp/isp.getAllISPNames-2";
import { IspGetISPInfo } from "./content/isp/isp.getISPInfo-5";
import { IspGetISPPageStyle } from "./content/isp/isp.getISPPageStyle-10";
import { IspGetISPTree } from "./content/isp/isp.getISPTree-8";
import { IspGetISPUsersCredit } from "./content/isp/isp.getISPUsersCredit-13";
import { IspListISPsWithIDs } from "./content/isp/isp.listISPsWithIDs-3";
import { IspResetISPPageStyle } from "./content/isp/isp.resetISPPageStyle-12";
import { IspSetISPPageStyle } from "./content/isp/isp.setISPPageStyle-11";
import { IspUpdateISP } from "./content/isp/isp.updateISP-1";

type isp =
  | IspAddNewISP
  | IspChangeISPDeposit
  | IspDeleteISP
  | IspGetAllISPInfos
  | IspGetAllISPMappedUserIDs
  | IspGetAllISPNames
  | IspGetISPInfo
  | IspGetISPPageStyle
  | IspGetISPTree
  | IspGetISPUsersCredit
  | IspListISPsWithIDs
  | IspResetISPPageStyle
  | IspSetISPPageStyle
  | IspUpdateISP;

export default isp;
