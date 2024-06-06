import { SortOrder } from "../../util/SortOrder";

export type VendorOrderByInput = {
  contact?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productsSupplied?: SortOrder;
  updatedAt?: SortOrder;
  vendorName?: SortOrder;
};
