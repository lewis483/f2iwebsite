import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ProductUpdateInput = {
  description?: string | null;
  farmer?: FarmerWhereUniqueInput | null;
  inventories?: InputJsonValue;
  name?: string | null;
  orders?: InputJsonValue;
  price?: number | null;
  quantity?: number | null;
};
