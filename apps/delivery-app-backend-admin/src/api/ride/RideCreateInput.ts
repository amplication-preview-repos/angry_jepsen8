import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { PaymentCreateNestedManyWithoutRidesInput } from "./PaymentCreateNestedManyWithoutRidesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RideCreateInput = {
  driver?: DriverWhereUniqueInput | null;
  dropoffLocation?: string | null;
  dropoffTime?: Date | null;
  fare?: number | null;
  payments?: PaymentCreateNestedManyWithoutRidesInput;
  pickupLocation?: string | null;
  pickupTime?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
