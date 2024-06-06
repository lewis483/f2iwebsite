import { ProductUpdateManyWithoutFarmersInput } from "./ProductUpdateManyWithoutFarmersInput";

export type FarmerUpdateInput = {
  email?: string | null;
  farmName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  products?: ProductUpdateManyWithoutFarmersInput;
};
