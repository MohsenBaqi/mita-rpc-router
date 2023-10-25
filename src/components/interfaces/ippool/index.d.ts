import { IppoolAddIPtoPool } from './ippool.addIPtoPool-8'
import { IppoolAddNewIPpool } from './ippool.addNewIPpool-0'
import { IppoolAddNewLoadBalancingIPpool } from './ippool.addNewLoadBalancingIPpool-9'
import { IppoolDelIPfromPool } from './ippool.delIPfromPool-6'
import { IppoolDeleteIPpool } from './ippool.deleteIPpool-5'
import { IppoolDeleteLoadBalancingIPpool } from './ippool.deleteLoadBalancingIPpool-11'
import { IppoolForceDelIPfromPool } from './ippool.forceDelIPfromPool-7'
import { IppoolGetIPpoolInfo } from './ippool.getIPpoolInfo-4'
import { IppoolGetIPpoolNames } from './ippool.getIPpoolNames-2'
import { IppoolGetIPpoolNames as IppoolGetIPpoolNames2 } from './ippool.getIPpoolNames-3'
import { IppoolUpdateIPpool } from './ippool.updateIPpool-1'
import { IppoolUpdateLoadBalancingIPpool } from './ippool.updateLoadBalancingIPpool-10'

type ippool =
  | IppoolAddIPtoPool
  | IppoolAddNewIPpool
  | IppoolAddNewLoadBalancingIPpool
  | IppoolDelIPfromPool
  | IppoolDeleteIPpool
  | IppoolDeleteLoadBalancingIPpool
  | IppoolForceDelIPfromPool
  | IppoolGetIPpoolInfo
  | IppoolGetIPpoolNames
  | IppoolGetIPpoolNames2
  | IppoolUpdateIPpool
  | IppoolUpdateLoadBalancingIPpool

export default ippool
