import { BwAddBwStaticIP } from './content/bw/bw.addBwStaticIP-17'
import { BwAddInterface } from './content/bw/bw.addInterface-0'
import { BwAddLeaf } from './content/bw/bw.addLeaf-2'
import { BwAddLeafService } from './content/bw/bw.addLeafService-3'
import { BwAddNode } from './content/bw/bw.addNode-1'
import { BwDelBwStaticIP } from './content/bw/bw.delBwStaticIP-19'
import { BwDelInterface } from './content/bw/bw.delInterface-12'
import { BwDelLeaf } from './content/bw/bw.delLeaf-11'
import { BwDelLeafService } from './content/bw/bw.delLeafService-8'
import { BwDelNode } from './content/bw/bw.delNode-9'
import { BwGetActiveLeaves } from './content/bw/bw.getActiveLeaves-22'
import { BwGetAllBwStaticIPs } from './content/bw/bw.getAllBwStaticIPs-20'
import { BwGetAllLeafNames } from './content/bw/bw.getAllLeafNames-10'
import { BwGetBwStaticIPInfo } from './content/bw/bw.getBwStaticIPInfo-21'
import { BwGetInterfaces } from './content/bw/bw.getInterfaces-4'
import { BwGetLeafCharges } from './content/bw/bw.getLeafCharges-23'
import { BwGetLeafInfo } from './content/bw/bw.getLeafInfo-6'
import { BwGetNodeInfo } from './content/bw/bw.getNodeInfo-5'
import { BwGetRealHostInterfaces } from './content/bw/bw.getRealHostInterfaces-24'
import { BwGetTree } from './content/bw/bw.getTree-7'
import { BwUpdateBwStaticIP } from './content/bw/bw.updateBwStaticIP-18'
import { BwUpdateInterface } from './content/bw/bw.updateInterface-13'
import { BwUpdateLeaf } from './content/bw/bw.updateLeaf-15'
import { BwUpdateLeafService } from './content/bw/bw.updateLeafService-16'
import { BwUpdateNode } from './content/bw/bw.updateNode-14'

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
  | BwUpdateNode

export default admin
