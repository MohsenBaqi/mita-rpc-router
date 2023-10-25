import { BwAddBwStaticIP } from "./bw.addBwStaticIP-17";
import { BwAddInterface } from "./bw.addInterface-0";
import { BwAddLeaf } from "./bw.addLeaf-2";
import { BwAddLeafService } from "./bw.addLeafService-3";
import { BwAddNode } from "./bw.addNode-1";
import { BwDelBwStaticIP } from "./bw.delBwStaticIP-19";
import { BwDelInterface } from "./bw.delInterface-12";
import { BwDelLeaf } from "./bw.delLeaf-11";
import { BwDelLeafService } from "./bw.delLeafService-8";
import { BwDelNode } from "./bw.delNode-9";
import { BwGetActiveLeaves } from "./bw.getActiveLeaves-22";
import { BwGetAllBwStaticIPs } from "./bw.getAllBwStaticIPs-20";
import { BwGetAllLeafNames } from "./bw.getAllLeafNames-10";
import { BwGetBwStaticIPInfo } from "./bw.getBwStaticIPInfo-21";
import { BwGetInterfaces } from "./bw.getInterfaces-4";
import { BwGetLeafCharges } from "./bw.getLeafCharges-23";
import { BwGetLeafInfo } from "./bw.getLeafInfo-6";
import { BwGetNodeInfo } from "./bw.getNodeInfo-5";
import { BwGetRealHostInterfaces } from "./bw.getRealHostInterfaces-24";
import { BwGetTree } from "./bw.getTree-7";
import { BwUpdateBwStaticIP } from "./bw.updateBwStaticIP-18";
import { BwUpdateInterface } from "./bw.updateInterface-13";
import { BwUpdateLeaf } from "./bw.updateLeaf-15";
import { BwUpdateLeafService } from "./bw.updateLeafService-16";
import { BwUpdateNode } from "./bw.updateNode-14";

type admin =
  | BwAddBwStaticIP
  | BwAddInterface
  | BwAddLeaf
  | BwAddLeafService
  | BwAddNode
  | BwDelBwStaticIP
  | BwDelInterface
  | BwDelLeaf
  | BwDelLeafService
  | BwDelNode
  | BwGetActiveLeaves
  | BwGetAllBwStaticIPs
  | BwGetAllLeafNames
  | BwGetBwStaticIPInfo
  | BwGetInterfaces
  | BwGetLeafCharges
  | BwGetLeafInfo
  | BwGetNodeInfo
  | BwGetRealHostInterfaces
  | BwGetTree
  | BwUpdateBwStaticIP
  | BwUpdateInterface
  | BwUpdateLeaf
  | BwUpdateLeafService
  | BwUpdateNode;

export default admin;
