import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  createdAt?: SortOrder;
  driverExperience?: SortOrder;
  driverLicenseNumber?: SortOrder;
  driverPassport?: SortOrder;
  driverPassportImage?: SortOrder;
  driverRating?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
