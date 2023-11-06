import { LoginLogin } from "./content/login/login.login-1";
import { LoginLogin as LoginLogin2 } from "./content/login/login.login-2";
import { LoginSearchAdminLoginHistory } from "./content/login/login.searchAdminLoginHistory-3";
import { LoginWebLogin } from "./content/login/login.webLogin-0";

type login =
  | LoginLogin
  | LoginLogin2
  | LoginSearchAdminLoginHistory
  | LoginWebLogin;

export default login;
