import { IspAddNewISP } from './isp.addNewISP-0'
import { IspChangeISPDeposit } from './isp.changeISPDeposit-6'
import { IspDeleteISP } from './isp.deleteISP-7'
import { IspGetAllISPInfos } from './isp.getAllISPInfos-4'
import { IspGetAllISPMappedUserIDs } from './isp.getAllISPMappedUserIDs-9'
import { IspGetAllISPNames } from './isp.getAllISPNames-2'
import { IspGetISPInfo } from './isp.getISPInfo-5'
import { IspGetISPPageStyle } from './isp.getISPPageStyle-10'
import { IspGetISPTree } from './isp.getISPTree-8'
import { IspGetISPUsersCredit } from './isp.getISPUsersCredit-13'
import { IspListISPsWithIDs } from './isp.listISPsWithIDs-3'
import { IspResetISPPageStyle } from './isp.resetISPPageStyle-12'
import { IspSetISPPageStyle } from './isp.setISPPageStyle-11'
import { IspUpdateISP } from './isp.updateISP-1'

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
  | IspUpdateISP

export default isp
