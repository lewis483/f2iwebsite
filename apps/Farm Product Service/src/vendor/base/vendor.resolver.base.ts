/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Vendor } from "./Vendor";
import { VendorCountArgs } from "./VendorCountArgs";
import { VendorFindManyArgs } from "./VendorFindManyArgs";
import { VendorFindUniqueArgs } from "./VendorFindUniqueArgs";
import { CreateVendorArgs } from "./CreateVendorArgs";
import { UpdateVendorArgs } from "./UpdateVendorArgs";
import { DeleteVendorArgs } from "./DeleteVendorArgs";
import { FarmProductFindManyArgs } from "../../farmProduct/base/FarmProductFindManyArgs";
import { FarmProduct } from "../../farmProduct/base/FarmProduct";
import { VendorService } from "../vendor.service";
@graphql.Resolver(() => Vendor)
export class VendorResolverBase {
  constructor(protected readonly service: VendorService) {}

  async _vendorsMeta(
    @graphql.Args() args: VendorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Vendor])
  async vendors(@graphql.Args() args: VendorFindManyArgs): Promise<Vendor[]> {
    return this.service.vendors(args);
  }

  @graphql.Query(() => Vendor, { nullable: true })
  async vendor(
    @graphql.Args() args: VendorFindUniqueArgs
  ): Promise<Vendor | null> {
    const result = await this.service.vendor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Vendor)
  async createVendor(@graphql.Args() args: CreateVendorArgs): Promise<Vendor> {
    return await this.service.createVendor({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Vendor)
  async updateVendor(
    @graphql.Args() args: UpdateVendorArgs
  ): Promise<Vendor | null> {
    try {
      return await this.service.updateVendor({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Vendor)
  async deleteVendor(
    @graphql.Args() args: DeleteVendorArgs
  ): Promise<Vendor | null> {
    try {
      return await this.service.deleteVendor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [FarmProduct], { name: "farmProducts" })
  async findFarmProducts(
    @graphql.Parent() parent: Vendor,
    @graphql.Args() args: FarmProductFindManyArgs
  ): Promise<FarmProduct[]> {
    const results = await this.service.findFarmProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
