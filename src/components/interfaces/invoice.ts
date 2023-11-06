import { InvoiceAddInvoiceProfile } from "./content/invoice/invoice.addInvoiceProfile-7";
import { InvoiceAddInvoiceTemplate } from "./content/invoice/invoice.addInvoiceTemplate-12";
import { InvoiceDeleteInvoiceProfile } from "./content/invoice/invoice.deleteInvoiceProfile-9";
import { InvoiceDeleteInvoiceTemplate } from "./content/invoice/invoice.deleteInvoiceTemplate-13";
import { InvoiceGetAllTemplateNames } from "./content/invoice/invoice.getAllTemplateNames-11";
import { InvoiceGetInvoiceByID } from "./content/invoice/invoice.getInvoiceByID-21";
import { InvoiceGetInvoiceProfileByGroupName } from "./content/invoice/invoice.getInvoiceProfileByGroupName-5";
import { InvoiceGetInvoiceProfileByID } from "./content/invoice/invoice.getInvoiceProfileByID-3";
import { InvoiceGetInvoiceProfileByName } from "./content/invoice/invoice.getInvoiceProfileByName-2";
import { InvoiceGetInvoiceProfileByUserID } from "./content/invoice/invoice.getInvoiceProfileByUserID-4";
import { InvoiceGetInvoiceProfileNames } from "./content/invoice/invoice.getInvoiceProfileNames-0";
import { InvoiceGetInvoiceProfiles } from "./content/invoice/invoice.getInvoiceProfiles-1";
import { InvoiceGetInvoiceRuleByID } from "./content/invoice/invoice.getInvoiceRuleByID-6";
import { InvoiceGetInvoiceRulesDescByProfileName } from "./content/invoice/invoice.getInvoiceRulesDescByProfileName-10";
import { InvoiceGetInvoiceWithRuleByInvoiceID } from "./content/invoice/invoice.getInvoiceWithRuleByInvoiceID-23";
import { InvoiceGetPIByID } from "./content/invoice/invoice.getPIByID-20";
import { InvoiceGetPIWithRuleByPIID } from "./content/invoice/invoice.getPIWithRuleByPIID-22";
import { InvoiceInvoicePaid } from "./content/invoice/invoice.invoicePaid-19";
import { InvoiceInvoicePutUserOnDept } from "./content/invoice/invoice.invoicePutUserOnDept-17";
import { InvoiceIssueProformaInvoice } from "./content/invoice/invoice.issueProformaInvoice-16";
import { InvoiceProformaInvoicePaid } from "./content/invoice/invoice.proformaInvoicePaid-18";
import { InvoiceSearchInvoices } from "./content/invoice/invoice.searchInvoices-14";
import { InvoiceSearchProformaInvoices } from "./content/invoice/invoice.searchProformaInvoices-15";
import { InvoiceUpdateInvoiceProfile } from "./content/invoice/invoice.updateInvoiceProfile-8";

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
