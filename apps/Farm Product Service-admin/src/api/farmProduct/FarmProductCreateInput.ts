import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type FarmProductCreateInput = {
  price?: number | null;
  productName?: string | null;
  quantity?: number | null;
  vendor?: VendorWhereUniqueInput | null;
};
