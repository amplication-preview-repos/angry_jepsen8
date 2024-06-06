import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VehicleWhereInput = {
  color?: StringNullableFilter;
  id?: StringFilter;
  licensePlate?: StringNullableFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  year?: IntNullableFilter;
};
