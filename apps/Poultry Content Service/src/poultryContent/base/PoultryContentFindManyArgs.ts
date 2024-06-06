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
import { PoultryContentWhereInput } from "./PoultryContentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PoultryContentOrderByInput } from "./PoultryContentOrderByInput";

@ArgsType()
class PoultryContentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PoultryContentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PoultryContentWhereInput, { nullable: true })
  @Type(() => PoultryContentWhereInput)
  where?: PoultryContentWhereInput;

  @ApiProperty({
    required: false,
    type: [PoultryContentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PoultryContentOrderByInput], { nullable: true })
  @Type(() => PoultryContentOrderByInput)
  orderBy?: Array<PoultryContentOrderByInput>;

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

export { PoultryContentFindManyArgs as PoultryContentFindManyArgs };