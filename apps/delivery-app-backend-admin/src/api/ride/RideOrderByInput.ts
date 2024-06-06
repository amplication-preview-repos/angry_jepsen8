import { SortOrder } from "../../util/SortOrder";

export type RideOrderByInput = {
  createdAt?: SortOrder;
  driverId?: SortOrder;
  dropoffLocation?: SortOrder;
  dropoffTime?: SortOrder;
  fare?: SortOrder;
  id?: SortOrder;
  pickupLocation?: SortOrder;
  pickupTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
