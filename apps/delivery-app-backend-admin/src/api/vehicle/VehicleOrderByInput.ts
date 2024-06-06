import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  licensePlate?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
