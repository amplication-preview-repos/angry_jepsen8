import { Ride } from "../ride/Ride";
import { JsonValue } from "type-fest";

export type User = {
  address: string | null;
  contactNumber: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  hashedPassword: string | null;
  homeAddress: string | null;
  id: string;
  lastName: string | null;
  passwordHash: string | null;
  phoneNumber: string | null;
  rides?: Array<Ride>;
  roles: JsonValue;
  updatedAt: Date;
  userAddress: string | null;
  username: string;
  userPasswordHash: string | null;
  userPhoneNumber: string | null;
};
