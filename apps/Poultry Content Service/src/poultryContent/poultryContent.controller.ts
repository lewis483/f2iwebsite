import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PoultryContentService } from "./poultryContent.service";
import { PoultryContentControllerBase } from "./base/poultryContent.controller.base";

@swagger.ApiTags("poultryContents")
@common.Controller("poultryContents")
export class PoultryContentController extends PoultryContentControllerBase {
  constructor(protected readonly service: PoultryContentService) {
    super(service);
  }
}
