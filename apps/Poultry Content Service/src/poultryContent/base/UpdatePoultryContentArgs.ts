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
import { PoultryContentWhereUniqueInput } from "./PoultryContentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PoultryContentUpdateInput } from "./PoultryContentUpdateInput";

@ArgsType()
class UpdatePoultryContentArgs {
  @ApiProperty({
    required: true,
    type: () => PoultryContentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PoultryContentWhereUniqueInput)
  @Field(() => PoultryContentWhereUniqueInput, { nullable: false })
  where!: PoultryContentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PoultryContentUpdateInput,
  })
  @ValidateNested()
  @Type(() => PoultryContentUpdateInput)
  @Field(() => PoultryContentUpdateInput, { nullable: false })
  data!: PoultryContentUpdateInput;
}

export { UpdatePoultryContentArgs as UpdatePoultryContentArgs };