import { VoucherGetBatchVoucherAttrs } from "./voucher.getBatchVoucherAttrs-5";
import { VoucherGetVoucherByID } from "./voucher.getVoucherByID-9";
import { VoucherSearchBatch } from "./voucher.searchBatch-1";
import { VoucherSearchVoucher } from "./voucher.searchVoucher-0";
import { VoucherVoucherAddBatch } from "./voucher.voucherAddBatch-6";
import { VoucherVoucherAddNewUser } from "./voucher.voucherAddNewUser-4";
import { VoucherVoucherChangeBatchLockStatus } from "./voucher.voucherChangeBatchLockStatus-7";
import { VoucherVoucherGetBatchByID } from "./voucher.voucherGetBatchByID-8";
import { VoucherVoucherRechargeUser } from "./voucher.voucherRechargeUser-2";
import { VoucherVoucherRechargeUser as VoucherVoucherRechargeUser2 } from "./voucher.voucherRechargeUser-3";
import { VoucherVoucherSearchBatch } from "./voucher.voucherSearchBatch-10";

type voucher =
  | VoucherGetBatchVoucherAttrs
  | VoucherGetVoucherByID
  | VoucherSearchBatch
  | VoucherSearchVoucher
  | VoucherVoucherAddBatch
  | VoucherVoucherAddNewUser
  | VoucherVoucherChangeBatchLockStatus
  | VoucherVoucherGetBatchByID
  | VoucherVoucherRechargeUser
  | VoucherVoucherRechargeUser2
  | VoucherVoucherSearchBatch;

export default voucher;
