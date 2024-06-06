/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FarmProductWhereInput } from "./FarmProductWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FarmProductOrderByInput } from "./FarmProductOrderByInput";

@ArgsType()
class FarmProductFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FarmProductWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FarmProductWhereInput, { nullable: true })
  @Type(() => FarmProductWhereInput)
  where?: FarmProductWhereInput;

  @ApiProperty({
    required: false,
    type: [FarmProductOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FarmProductOrderByInput], { nullable: true })
  @Type(() => FarmProductOrderByInput)
  orderBy?: Array<FarmProductOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FarmProductFindManyArgs as FarmProductFindManyArgs };
