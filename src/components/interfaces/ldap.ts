import { LdapDeleteLDAPIBSMapping } from "./content/ldap/ldap.deleteLDAPIBSMapping-6";
import { LdapGetLDAPIBSMapping } from "./content/ldap/ldap.getLDAPIBSMapping-5";
import { LdapGetLDAPSearchOptionsByDomain } from "./content/ldap/ldap.getLDAPSearchOptionsByDomain-8";
import { LdapGetUserInfo } from "./content/ldap/ldap.getUserInfo-2";
import { LdapGetUserInfoKeys } from "./content/ldap/ldap.getUserInfoKeys-3";
import { LdapGetUserInfos } from "./content/ldap/ldap.getUserInfos-1";
import { LdapGetUsernames } from "./content/ldap/ldap.getUsernames-0";
import { LdapSetLDAPIBSMapping } from "./content/ldap/ldap.setLDAPIBSMapping-4";
import { LdapSetLDAPSearchOptionsByDomain } from "./content/ldap/ldap.setLDAPSearchOptionsByDomain-7";

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
