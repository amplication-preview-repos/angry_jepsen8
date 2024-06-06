import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RideWhereInput = {
  driver?: DriverWhereUniqueInput;
  dropoffLocation?: StringNullableFilter;
  dropoffTime?: DateTimeNullableFilter;
  fare?: FloatNullableFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  pickupLocation?: StringNullableFilter;
  pickupTime?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
