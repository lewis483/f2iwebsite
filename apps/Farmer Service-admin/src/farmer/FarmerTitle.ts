import { Farmer as TFarmer } from "../api/farmer/Farmer";

export const FARMER_TITLE_FIELD = "farmName";

export const FarmerTitle = (record: TFarmer): string => {
  return record.farmName?.toString() || String(record.id);
};
