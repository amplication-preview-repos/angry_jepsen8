import { InputJsonValue } from "../../types";
import { RideUpdateManyWithoutDriversInput } from "./RideUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  driverExperience?: number | null;
  driverLicenseNumber?: string | null;
  driverPassport?: string | null;
  driverPassportImage?: InputJsonValue;
  driverRating?: number | null;
  rides?: RideUpdateManyWithoutDriversInput;
};
