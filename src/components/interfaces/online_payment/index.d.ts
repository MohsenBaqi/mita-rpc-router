import { OnlinePaymentAddGateway } from "./online_payment.addGateway-4";
import { OnlinePaymentDeleteGateway } from "./online_payment.deleteGateway-6";
import { OnlinePaymentGetAllGatewayInfos } from "./online_payment.getAllGatewayInfos-9";
import { OnlinePaymentGetAllGatewayNames } from "./online_payment.getAllGatewayNames-8";
import { OnlinePaymentGetAllGatewayTypes } from "./online_payment.getAllGatewayTypes-7";
import { OnlinePaymentGetAvailableGatewayTypes } from "./online_payment.getAvailableGatewayTypes-0";
import { OnlinePaymentGetPaymentAmountSuggestions } from "./online_payment.getPaymentAmountSuggestions-1";
import { OnlinePaymentPreparePayment } from "./online_payment.preparePayment-2";
import { OnlinePaymentPurgePayment } from "./online_payment.purgePayment-10";
import { OnlinePaymentUpdateGateway } from "./online_payment.updateGateway-5";
import { OnlinePaymentVerifyPayment } from "./online_payment.verifyPayment-3";

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
