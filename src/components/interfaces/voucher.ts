import { VoucherGetBatchVoucherAttrs } from './content/voucher/voucher.getBatchVoucherAttrs-5'
import { VoucherGetVoucherByID } from './content/voucher/voucher.getVoucherByID-9'
import { VoucherSearchBatch } from './content/voucher/voucher.searchBatch-1'
import { VoucherSearchVoucher } from './content/voucher/voucher.searchVoucher-0'
import { VoucherVoucherAddBatch } from './content/voucher/voucher.voucherAddBatch-6'
import { VoucherVoucherAddNewUser } from './content/voucher/voucher.voucherAddNewUser-4'
import { VoucherVoucherChangeBatchLockStatus } from './content/voucher/voucher.voucherChangeBatchLockStatus-7'
import { VoucherVoucherGetBatchByID } from './content/voucher/voucher.voucherGetBatchByID-8'
import { VoucherVoucherRechargeUser } from './content/voucher/voucher.voucherRechargeUser-2'
import { VoucherVoucherRechargeUser as VoucherVoucherRechargeUser2 } from './content/voucher/voucher.voucherRechargeUser-3'
import { VoucherVoucherSearchBatch } from './content/voucher/voucher.voucherSearchBatch-10'

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
  | VoucherVoucherSearchBatch

export default voucher
