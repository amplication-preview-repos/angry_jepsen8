import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RideListRelationFilter } from "../ride/RideListRelationFilter";

export type UserWhereInput = {
  address?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  hashedPassword?: StringNullableFilter;
  homeAddress?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  passwordHash?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rides?: RideListRelationFilter;
  userAddress?: StringNullableFilter;
  username?: StringFilter;
  userPasswordHash?: StringNullableFilter;
  userPhoneNumber?: StringNullableFilter;
};
