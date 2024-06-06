import { Farmer } from "../farmer/Farmer";
import { JsonValue } from "type-fest";

export type Product = {
  createdAt: Date;
  description: string | null;
  farmer?: Farmer | null;
  id: string;
  inventories: JsonValue;
  name: string | null;
  orders: JsonValue;
  price: number | null;
  quantity: number | null;
  updatedAt: Date;
};
