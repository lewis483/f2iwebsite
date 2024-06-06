import { FarmProduct as TFarmProduct } from "../api/farmProduct/FarmProduct";

export const FARMPRODUCT_TITLE_FIELD = "productName";

export const FarmProductTitle = (record: TFarmProduct): string => {
  return record.productName?.toString() || String(record.id);
};
