import { IppoolAddIPtoPool } from "./content/ippool/ippool.addIPtoPool-8";
import { IppoolAddNewIPpool } from "./content/ippool/ippool.addNewIPpool-0";
import { IppoolAddNewLoadBalancingIPpool } from "./content/ippool/ippool.addNewLoadBalancingIPpool-9";
import { IppoolDelIPfromPool } from "./content/ippool/ippool.delIPfromPool-6";
import { IppoolDeleteIPpool } from "./content/ippool/ippool.deleteIPpool-5";
import { IppoolDeleteLoadBalancingIPpool } from "./content/ippool/ippool.deleteLoadBalancingIPpool-11";
import { IppoolForceDelIPfromPool } from "./content/ippool/ippool.forceDelIPfromPool-7";
import { IppoolGetIPpoolInfo } from "./content/ippool/ippool.getIPpoolInfo-4";
import { IppoolGetIPpoolNames } from "./content/ippool/ippool.getIPpoolNames-2";
import { IppoolGetIPpoolNames as IppoolGetIPpoolNames2 } from "./content/ippool/ippool.getIPpoolNames-3";
import { IppoolUpdateIPpool } from "./content/ippool/ippool.updateIPpool-1";
import { IppoolUpdateLoadBalancingIPpool } from "./content/ippool/ippool.updateLoadBalancingIPpool-10";

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
  | IppoolUpdateLoadBalancingIPpool;

export default ippool;
