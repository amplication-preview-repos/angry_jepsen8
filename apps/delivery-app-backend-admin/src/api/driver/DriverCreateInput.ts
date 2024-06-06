import { InputJsonValue } from "../../types";
import { RideCreateNestedManyWithoutDriversInput } from "./RideCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  driverExperience?: number | null;
  driverLicenseNumber?: string | null;
  driverPassport?: string | null;
  driverPassportImage?: InputJsonValue;
  driverRating?: number | null;
  rides?: RideCreateNestedManyWithoutDriversInput;
};
