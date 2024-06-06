import { SortOrder } from "../../util/SortOrder";

export type FarmProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  productName?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
  vendorId?: SortOrder;
};
