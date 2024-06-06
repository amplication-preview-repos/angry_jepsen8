import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  address?: SortOrder;
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  hashedPassword?: SortOrder;
  homeAddress?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  passwordHash?: SortOrder;
  phoneNumber?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  userAddress?: SortOrder;
  username?: SortOrder;
  userPasswordHash?: SortOrder;
  userPhoneNumber?: SortOrder;
};
