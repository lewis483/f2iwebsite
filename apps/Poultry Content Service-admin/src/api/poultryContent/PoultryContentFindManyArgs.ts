import { PoultryContentWhereInput } from "./PoultryContentWhereInput";
import { PoultryContentOrderByInput } from "./PoultryContentOrderByInput";

export type PoultryContentFindManyArgs = {
  where?: PoultryContentWhereInput;
  orderBy?: Array<PoultryContentOrderByInput>;
  skip?: number;
  take?: number;
};
