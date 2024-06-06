import { Module } from "@nestjs/common";
import { FarmProductModuleBase } from "./base/farmProduct.module.base";
import { FarmProductService } from "./farmProduct.service";
import { FarmProductController } from "./farmProduct.controller";
import { FarmProductResolver } from "./farmProduct.resolver";

@Module({
  imports: [FarmProductModuleBase],
  controllers: [FarmProductController],
  providers: [FarmProductService, FarmProductResolver],
  exports: [FarmProductService],
})
export class FarmProductModule {}
