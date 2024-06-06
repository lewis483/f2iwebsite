import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FarmProductServiceBase } from "./base/farmProduct.service.base";

@Injectable()
export class FarmProductService extends FarmProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
