import { Product } from "../product/Product";

export type Farmer = {
  createdAt: Date;
  email: string | null;
  farmName: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
