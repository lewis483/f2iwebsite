import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type FarmProductWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  productName?: StringNullableFilter;
  quantity?: IntNullableFilter;
  vendor?: VendorWhereUniqueInput;
};
