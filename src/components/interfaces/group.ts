import { GroupAddNewGroup } from "./content/group/group.addNewGroup-0";
import { GroupCopyGroup } from "./content/group/group.copyGroup-1";
import { GroupDelGroup } from "./content/group/group.delGroup-10";
import { GroupGetGroupCredits } from "./content/group/group.getGroupCredits-5";
import { GroupGetGroupInfo } from "./content/group/group.getGroupInfo-7";
import { GroupGetGroupUsersCount } from "./content/group/group.getGroupUsersCount-6";
import { GroupListGroupInfos } from "./content/group/group.listGroupInfos-4";
import { GroupListGroups } from "./content/group/group.listGroups-2";
import { GroupListGroupsWithIDs } from "./content/group/group.listGroupsWithIDs-3";
import { GroupUpdateGroup } from "./content/group/group.updateGroup-8";
import { GroupUpdateGroupAttrs } from "./content/group/group.updateGroupAttrs-9";

type group =
  | GroupAddNewGroup
  | GroupCopyGroup
  | GroupDelGroup
  | GroupGetGroupCredits
  | GroupGetGroupInfo
  | GroupGetGroupUsersCount
  | GroupListGroupInfos
  | GroupListGroups
  | GroupListGroupsWithIDs
  | GroupUpdateGroup
  | GroupUpdateGroupAttrs;

export default group;
