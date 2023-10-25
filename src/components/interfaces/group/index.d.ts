import { GroupAddNewGroup } from "./group.addNewGroup-0";
import { GroupCopyGroup } from "./group.copyGroup-1";
import { GroupDelGroup } from "./group.delGroup-10";
import { GroupGetGroupCredits } from "./group.getGroupCredits-5";
import { GroupGetGroupInfo } from "./group.getGroupInfo-7";
import { GroupGetGroupUsersCount } from "./group.getGroupUsersCount-6";
import { GroupListGroupInfos } from "./group.listGroupInfos-4";
import { GroupListGroups } from "./group.listGroups-2";
import { GroupListGroupsWithIDs } from "./group.listGroupsWithIDs-3";
import { GroupUpdateGroup } from "./group.updateGroup-8";
import { GroupUpdateGroupAttrs } from "./group.updateGroupAttrs-9";

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
