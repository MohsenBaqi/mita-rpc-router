import { InvoiceAddInvoiceProfile } from "./invoice.addInvoiceProfile-7";
import { InvoiceAddInvoiceTemplate } from "./invoice.addInvoiceTemplate-12";
import { InvoiceDeleteInvoiceProfile } from "./invoice.deleteInvoiceProfile-9";
import { InvoiceDeleteInvoiceTemplate } from "./invoice.deleteInvoiceTemplate-13";
import { InvoiceGetAllTemplateNames } from "./invoice.getAllTemplateNames-11";
import { InvoiceGetInvoiceByID } from "./invoice.getInvoiceByID-21";
import { InvoiceGetInvoiceProfileByGroupName } from "./invoice.getInvoiceProfileByGroupName-5";
import { InvoiceGetInvoiceProfileByID } from "./invoice.getInvoiceProfileByID-3";
import { InvoiceGetInvoiceProfileByName } from "./invoice.getInvoiceProfileByName-2";
import { InvoiceGetInvoiceProfileByUserID } from "./invoice.getInvoiceProfileByUserID-4";
import { InvoiceGetInvoiceProfileNames } from "./invoice.getInvoiceProfileNames-0";
import { InvoiceGetInvoiceProfiles } from "./invoice.getInvoiceProfiles-1";
import { InvoiceGetInvoiceRuleByID } from "./invoice.getInvoiceRuleByID-6";
import { InvoiceGetInvoiceRulesDescByProfileName } from "./invoice.getInvoiceRulesDescByProfileName-10";
import { InvoiceGetInvoiceWithRuleByInvoiceID } from "./invoice.getInvoiceWithRuleByInvoiceID-23";
import { InvoiceGetPIByID } from "./invoice.getPIByID-20";
import { InvoiceGetPIWithRuleByPIID } from "./invoice.getPIWithRuleByPIID-22";
import { InvoiceInvoicePaid } from "./invoice.invoicePaid-19";
import { InvoiceInvoicePutUserOnDept } from "./invoice.invoicePutUserOnDept-17";
import { InvoiceIssueProformaInvoice } from "./invoice.issueProformaInvoice-16";
import { InvoiceProformaInvoicePaid } from "./invoice.proformaInvoicePaid-18";
import { InvoiceSearchInvoices } from "./invoice.searchInvoices-14";
import { InvoiceSearchProformaInvoices } from "./invoice.searchProformaInvoices-15";
import { InvoiceUpdateInvoiceProfile } from "./invoice.updateInvoiceProfile-8";

type invoice =
  | InvoiceAddInvoiceProfile
  | InvoiceAddInvoiceTemplate
  | InvoiceDeleteInvoiceProfile
  | InvoiceDeleteInvoiceTemplate
  | InvoiceGetAllTemplateNames
  | InvoiceGetInvoiceByID
  | InvoiceGetInvoiceProfileByGroupName
  | InvoiceGetInvoiceProfileByID
  | InvoiceGetInvoiceProfileByName
  | InvoiceGetInvoiceProfileByUserID
  | InvoiceGetInvoiceProfileNames
  | InvoiceGetInvoiceProfiles
  | InvoiceGetInvoiceRuleByID
  | InvoiceGetInvoiceRulesDescByProfileName
  | InvoiceGetInvoiceWithRuleByInvoiceID
  | InvoiceGetPIByID
  | InvoiceGetPIWithRuleByPIID
  | InvoiceInvoicePaid
  | InvoiceInvoicePutUserOnDept
  | InvoiceIssueProformaInvoice
  | InvoiceProformaInvoicePaid
  | InvoiceSearchInvoices
  | InvoiceSearchProformaInvoices
  | InvoiceUpdateInvoiceProfile;

export default invoice;
