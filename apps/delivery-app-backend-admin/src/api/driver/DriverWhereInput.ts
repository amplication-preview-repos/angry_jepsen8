import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RideListRelationFilter } from "../ride/RideListRelationFilter";

export type DriverWhereInput = {
  driverExperience?: IntNullableFilter;
  driverLicenseNumber?: StringNullableFilter;
  driverPassport?: StringNullableFilter;
  driverPassportImage?: JsonFilter;
  driverRating?: FloatNullableFilter;
  id?: StringFilter;
  rides?: RideListRelationFilter;
};
