import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoultryContentServiceBase } from "./base/poultryContent.service.base";

@Injectable()
export class PoultryContentService extends PoultryContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
