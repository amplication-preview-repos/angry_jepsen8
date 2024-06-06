import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { PaymentUpdateManyWithoutRidesInput } from "./PaymentUpdateManyWithoutRidesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RideUpdateInput = {
  driver?: DriverWhereUniqueInput | null;
  dropoffLocation?: string | null;
  dropoffTime?: Date | null;
  fare?: number | null;
  payments?: PaymentUpdateManyWithoutRidesInput;
  pickupLocation?: string | null;
  pickupTime?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
