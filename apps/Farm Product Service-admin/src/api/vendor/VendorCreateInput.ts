import { FarmProductCreateNestedManyWithoutVendorsInput } from "./FarmProductCreateNestedManyWithoutVendorsInput";

export type VendorCreateInput = {
  contact?: string | null;
  farmProducts?: FarmProductCreateNestedManyWithoutVendorsInput;
  productsSupplied?: string | null;
  vendorName?: string | null;
};
