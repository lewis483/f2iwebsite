import { FarmProduct } from "../farmProduct/FarmProduct";

export type Vendor = {
  contact: string | null;
  createdAt: Date;
  farmProducts?: Array<FarmProduct>;
  id: string;
  productsSupplied: string | null;
  updatedAt: Date;
  vendorName: string | null;
};
