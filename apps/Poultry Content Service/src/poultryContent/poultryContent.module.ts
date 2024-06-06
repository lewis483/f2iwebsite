import { Module } from "@nestjs/common";
import { PoultryContentModuleBase } from "./base/poultryContent.module.base";
import { PoultryContentService } from "./poultryContent.service";
import { PoultryContentController } from "./poultryContent.controller";
import { PoultryContentResolver } from "./poultryContent.resolver";

@Module({
  imports: [PoultryContentModuleBase],
  controllers: [PoultryContentController],
  providers: [PoultryContentService, PoultryContentResolver],
  exports: [PoultryContentService],
})
export class PoultryContentModule {}
