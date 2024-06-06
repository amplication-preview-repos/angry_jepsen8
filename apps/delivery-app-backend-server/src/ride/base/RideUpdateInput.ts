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
import { DriverWhereUniqueInput } from "../../driver/base/DriverWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsNumber,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { PaymentUpdateManyWithoutRidesInput } from "./PaymentUpdateManyWithoutRidesInput";
import { EnumRideStatus } from "./EnumRideStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class RideUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DriverWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DriverWhereUniqueInput)
  @IsOptional()
  @Field(() => DriverWhereUniqueInput, {
    nullable: true,
  })
  driver?: DriverWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dropoffLocation?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dropoffTime?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  fare?: number | null;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutRidesInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutRidesInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutRidesInput, {
    nullable: true,
  })
  payments?: PaymentUpdateManyWithoutRidesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  pickupLocation?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  pickupTime?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumRideStatus,
  })
  @IsEnum(EnumRideStatus)
  @IsOptional()
  @Field(() => EnumRideStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { RideUpdateInput as RideUpdateInput };
