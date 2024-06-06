import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  farmerId?: SortOrder;
  id?: SortOrder;
  inventories?: SortOrder;
  name?: SortOrder;
  orders?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
