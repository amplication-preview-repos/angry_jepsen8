import { Driver } from "../driver/Driver";
import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type Ride = {
  createdAt: Date;
  driver?: Driver | null;
  dropoffLocation: string | null;
  dropoffTime: Date | null;
  fare: number | null;
  id: string;
  payments?: Array<Payment>;
  pickupLocation: string | null;
  pickupTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
