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
import {
  IsNumber,
  IsOptional,
  IsString,
  IsInt,
  ValidateNested,
} from "class-validator";
import { VendorWhereUniqueInput } from "../../vendor/base/VendorWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class FarmProductCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  productName?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
    type: () => VendorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VendorWhereUniqueInput)
  @IsOptional()
  @Field(() => VendorWhereUniqueInput, {
    nullable: true,
  })
  vendor?: VendorWhereUniqueInput | null;
}

export { FarmProductCreateInput as FarmProductCreateInput };
