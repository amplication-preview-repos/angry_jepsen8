import { JsonValue } from "type-fest";
import { Ride } from "../ride/Ride";

export type Driver = {
  createdAt: Date;
  driverExperience: number | null;
  driverLicenseNumber: string | null;
  driverPassport: string | null;
  driverPassportImage: JsonValue;
  driverRating: number | null;
  id: string;
  rides?: Array<Ride>;
  updatedAt: Date;
};
