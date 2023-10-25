import { LdapDeleteLDAPIBSMapping } from "./ldap.deleteLDAPIBSMapping-6";
import { LdapGetLDAPIBSMapping } from "./ldap.getLDAPIBSMapping-5";
import { LdapGetLDAPSearchOptionsByDomain } from "./ldap.getLDAPSearchOptionsByDomain-8";
import { LdapGetUserInfo } from "./ldap.getUserInfo-2";
import { LdapGetUserInfoKeys } from "./ldap.getUserInfoKeys-3";
import { LdapGetUserInfos } from "./ldap.getUserInfos-1";
import { LdapGetUsernames } from "./ldap.getUsernames-0";
import { LdapSetLDAPIBSMapping } from "./ldap.setLDAPIBSMapping-4";
import { LdapSetLDAPSearchOptionsByDomain } from "./ldap.setLDAPSearchOptionsByDomain-7";

type ldap =
  | LdapDeleteLDAPIBSMapping
  | LdapGetLDAPIBSMapping
  | LdapGetLDAPSearchOptionsByDomain
  | LdapGetUserInfo
  | LdapGetUserInfoKeys
  | LdapGetUserInfos
  | LdapGetUsernames
  | LdapSetLDAPIBSMapping
  | LdapSetLDAPSearchOptionsByDomain;

export default ldap;
