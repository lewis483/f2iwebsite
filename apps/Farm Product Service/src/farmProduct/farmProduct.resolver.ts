import * as graphql from "@nestjs/graphql";
import { FarmProductResolverBase } from "./base/farmProduct.resolver.base";
import { FarmProduct } from "./base/FarmProduct";
import { FarmProductService } from "./farmProduct.service";

@graphql.Resolver(() => FarmProduct)
export class FarmProductResolver extends FarmProductResolverBase {
  constructor(protected readonly service: FarmProductService) {
    super(service);
  }
}
