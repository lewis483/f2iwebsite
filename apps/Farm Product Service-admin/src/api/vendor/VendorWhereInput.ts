import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FarmProductListRelationFilter } from "../farmProduct/FarmProductListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type VendorWhereInput = {
  contact?: StringNullableFilter;
  farmProducts?: FarmProductListRelationFilter;
  id?: StringFilter;
  productsSupplied?: StringNullableFilter;
  vendorName?: StringNullableFilter;
};
