import { PermCanDo } from "./content/perm/perm.canDo-1";
import { PermChangePermission } from "./content/perm/perm.changePermission-5";
import { PermDelPermission } from "./content/perm/perm.delPermission-6";
import { PermDelPermissionValue } from "./content/perm/perm.delPermissionValue-7";
import { PermDeletePermTemplate } from "./content/perm/perm.deletePermTemplate-12";
import { PermGetAdminPermVal } from "./content/perm/perm.getAdminPermVal-4";
import { PermGetAllPerms } from "./content/perm/perm.getAllPerms-3";
import { PermGetListOfPermTemplates } from "./content/perm/perm.getListOfPermTemplates-9";
import { PermGetPermsOfAdmin } from "./content/perm/perm.getPermsOfAdmin-2";
import { PermGetPermsOfTemplate } from "./content/perm/perm.getPermsOfTemplate-10";
import { PermHasPerm } from "./content/perm/perm.hasPerm-0";
import { PermLoadPermTemplateToAdmin } from "./content/perm/perm.loadPermTemplateToAdmin-11";
import { PermLoadPermsFromAnotherAdmin } from "./content/perm/perm.loadPermsFromAnotherAdmin-13";
import { PermSavePermsOfAdminToTemplate } from "./content/perm/perm.savePermsOfAdminToTemplate-8";

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
