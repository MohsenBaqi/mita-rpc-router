import { PermCanDo } from "./perm.canDo-1";
import { PermChangePermission } from "./perm.changePermission-5";
import { PermDelPermission } from "./perm.delPermission-6";
import { PermDelPermissionValue } from "./perm.delPermissionValue-7";
import { PermDeletePermTemplate } from "./perm.deletePermTemplate-12";
import { PermGetAdminPermVal } from "./perm.getAdminPermVal-4";
import { PermGetAllPerms } from "./perm.getAllPerms-3";
import { PermGetListOfPermTemplates } from "./perm.getListOfPermTemplates-9";
import { PermGetPermsOfAdmin } from "./perm.getPermsOfAdmin-2";
import { PermGetPermsOfTemplate } from "./perm.getPermsOfTemplate-10";
import { PermHasPerm } from "./perm.hasPerm-0";
import { PermLoadPermTemplateToAdmin } from "./perm.loadPermTemplateToAdmin-11";
import { PermLoadPermsFromAnotherAdmin } from "./perm.loadPermsFromAnotherAdmin-13";
import { PermSavePermsOfAdminToTemplate } from "./perm.savePermsOfAdminToTemplate-8";

type perm =
  | PermCanDo
  | PermChangePermission
  | PermDelPermission
  | PermDelPermissionValue
  | PermDeletePermTemplate
  | PermGetAdminPermVal
  | PermGetAllPerms
  | PermGetListOfPermTemplates
  | PermGetPermsOfAdmin
  | PermGetPermsOfTemplate
  | PermHasPerm
  | PermLoadPermTemplateToAdmin
  | PermLoadPermsFromAnotherAdmin
  | PermSavePermsOfAdminToTemplate;

export default perm;
