import { RideCreateNestedManyWithoutUsersInput } from "./RideCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  address?: string | null;
  contactNumber?: string | null;
  email?: string | null;
  firstName?: string | null;
  hashedPassword?: string | null;
  homeAddress?: string | null;
  lastName?: string | null;
  password: string;
  passwordHash?: string | null;
  phoneNumber?: string | null;
  rides?: RideCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  userAddress?: string | null;
  username: string;
  userPasswordHash?: string | null;
  userPhoneNumber?: string | null;
};
