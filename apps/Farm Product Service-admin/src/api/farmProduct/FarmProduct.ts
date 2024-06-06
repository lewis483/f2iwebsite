import { Vendor } from "../vendor/Vendor";

export type FarmProduct = {
  createdAt: Date;
  id: string;
  price: number | null;
  productName: string | null;
  quantity: number | null;
  updatedAt: Date;
  vendor?: Vendor | null;
};
