import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FarmProductService } from "./farmProduct.service";
import { FarmProductControllerBase } from "./base/farmProduct.controller.base";

@swagger.ApiTags("farmProducts")
@common.Controller("farmProducts")
export class FarmProductController extends FarmProductControllerBase {
  constructor(protected readonly service: FarmProductService) {
    super(service);
  }
}
