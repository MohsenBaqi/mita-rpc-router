import { UserCustomFieldAddNewCustomField } from "./user_custom_field.addNewCustomField-0";
import { UserCustomFieldDeleteCustomField } from "./user_custom_field.deleteCustomField-2";
import { UserCustomFieldGetAllCustomFields } from "./user_custom_field.getAllCustomFields-3";
import { UserCustomFieldUpdateCustomField } from "./user_custom_field.updateCustomField-1";

type user_custom_field =
  | UserCustomFieldAddNewCustomField
  | UserCustomFieldDeleteCustomField
  | UserCustomFieldGetAllCustomFields
  | UserCustomFieldUpdateCustomField;

export default user_custom_field;
