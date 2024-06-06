import { PoultryContent as TPoultryContent } from "../api/poultryContent/PoultryContent";

export const POULTRYCONTENT_TITLE_FIELD = "title";

export const PoultryContentTitle = (record: TPoultryContent): string => {
  return record.title?.toString() || String(record.id);
};
