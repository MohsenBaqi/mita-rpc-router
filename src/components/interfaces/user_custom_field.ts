import { UserCustomFieldAddNewCustomField } from "./content/user_custom_field/user_custom_field.addNewCustomField-0";
import { UserCustomFieldDeleteCustomField } from "./content/user_custom_field/user_custom_field.deleteCustomField-2";
import { UserCustomFieldGetAllCustomFields } from "./content/user_custom_field/user_custom_field.getAllCustomFields-3";
import { UserCustomFieldUpdateCustomField } from "./content/user_custom_field/user_custom_field.updateCustomField-1";

type user_custom_field =
  | UserCustomFieldAddNewCustomField
  | UserCustomFieldDeleteCustomField
  | UserCustomFieldGetAllCustomFields
  | UserCustomFieldUpdateCustomField;

export default user_custom_field;
