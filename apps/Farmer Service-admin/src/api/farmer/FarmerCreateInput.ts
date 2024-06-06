import { ProductCreateNestedManyWithoutFarmersInput } from "./ProductCreateNestedManyWithoutFarmersInput";

export type FarmerCreateInput = {
  email?: string | null;
  farmName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  products?: ProductCreateNestedManyWithoutFarmersInput;
};
