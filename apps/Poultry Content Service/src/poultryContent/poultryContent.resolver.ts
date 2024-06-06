import * as graphql from "@nestjs/graphql";
import { PoultryContentResolverBase } from "./base/poultryContent.resolver.base";
import { PoultryContent } from "./base/PoultryContent";
import { PoultryContentService } from "./poultryContent.service";

@graphql.Resolver(() => PoultryContent)
export class PoultryContentResolver extends PoultryContentResolverBase {
  constructor(protected readonly service: PoultryContentService) {
    super(service);
  }
}
