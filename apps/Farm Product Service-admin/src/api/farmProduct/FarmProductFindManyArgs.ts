import { FarmProductWhereInput } from "./FarmProductWhereInput";
import { FarmProductOrderByInput } from "./FarmProductOrderByInput";

export type FarmProductFindManyArgs = {
  where?: FarmProductWhereInput;
  orderBy?: Array<FarmProductOrderByInput>;
  skip?: number;
  take?: number;
};
