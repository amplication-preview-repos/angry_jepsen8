import { RideUpdateManyWithoutUsersInput } from "./RideUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  address?: string | null;
  contactNumber?: string | null;
  email?: string | null;
  firstName?: string | null;
  hashedPassword?: string | null;
  homeAddress?: string | null;
  lastName?: string | null;
  password?: string;
  passwordHash?: string | null;
  phoneNumber?: string | null;
  rides?: RideUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  userAddress?: string | null;
  username?: string;
  userPasswordHash?: string | null;
  userPhoneNumber?: string | null;
};
