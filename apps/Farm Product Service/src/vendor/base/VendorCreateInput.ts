/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { FarmProductCreateNestedManyWithoutVendorsInput } from "./FarmProductCreateNestedManyWithoutVendorsInput";
import { Type } from "class-transformer";

@InputType()
class VendorCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contact?: string | null;

  @ApiProperty({
    required: false,
    type: () => FarmProductCreateNestedManyWithoutVendorsInput,
  })
  @ValidateNested()
  @Type(() => FarmProductCreateNestedManyWithoutVendorsInput)
  @IsOptional()
  @Field(() => FarmProductCreateNestedManyWithoutVendorsInput, {
    nullable: true,
  })
  farmProducts?: FarmProductCreateNestedManyWithoutVendorsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  productsSupplied?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  vendorName?: string | null;
}

export { VendorCreateInput as VendorCreateInput };
