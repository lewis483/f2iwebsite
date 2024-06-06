import { Vendor as TVendor } from "../api/vendor/Vendor";

export const VENDOR_TITLE_FIELD = "vendorName";

export const VendorTitle = (record: TVendor): string => {
  return record.vendorName?.toString() || String(record.id);
};
