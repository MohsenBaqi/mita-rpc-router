import { OnlinePaymentAddGateway } from "./content/online_payment/online_payment.addGateway-4";
import { OnlinePaymentDeleteGateway } from "./content/online_payment/online_payment.deleteGateway-6";
import { OnlinePaymentGetAllGatewayInfos } from "./content/online_payment/online_payment.getAllGatewayInfos-9";
import { OnlinePaymentGetAllGatewayNames } from "./content/online_payment/online_payment.getAllGatewayNames-8";
import { OnlinePaymentGetAllGatewayTypes } from "./content/online_payment/online_payment.getAllGatewayTypes-7";
import { OnlinePaymentGetAvailableGatewayTypes } from "./content/online_payment/online_payment.getAvailableGatewayTypes-0";
import { OnlinePaymentGetPaymentAmountSuggestions } from "./content/online_payment/online_payment.getPaymentAmountSuggestions-1";
import { OnlinePaymentPreparePayment } from "./content/online_payment/online_payment.preparePayment-2";
import { OnlinePaymentPurgePayment } from "./content/online_payment/online_payment.purgePayment-10";
import { OnlinePaymentUpdateGateway } from "./content/online_payment/online_payment.updateGateway-5";
import { OnlinePaymentVerifyPayment } from "./content/online_payment/online_payment.verifyPayment-3";

type online_payment =
  | OnlinePaymentAddGateway
  | OnlinePaymentDeleteGateway
  | OnlinePaymentGetAllGatewayInfos
  | OnlinePaymentGetAllGatewayNames
  | OnlinePaymentGetAllGatewayTypes
  | OnlinePaymentGetAvailableGatewayTypes
  | OnlinePaymentGetPaymentAmountSuggestions
  | OnlinePaymentPreparePayment
  | OnlinePaymentPurgePayment
  | OnlinePaymentUpdateGateway
  | OnlinePaymentVerifyPayment;

export default online_payment;
