import { FarmProductUpdateManyWithoutVendorsInput } from "./FarmProductUpdateManyWithoutVendorsInput";

export type VendorUpdateInput = {
  contact?: string | null;
  farmProducts?: FarmProductUpdateManyWithoutVendorsInput;
  productsSupplied?: string | null;
  vendorName?: string | null;
};
