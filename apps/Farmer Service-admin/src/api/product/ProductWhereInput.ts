import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  farmer?: FarmerWhereUniqueInput;
  id?: StringFilter;
  inventories?: JsonFilter;
  name?: StringNullableFilter;
  orders?: JsonFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
