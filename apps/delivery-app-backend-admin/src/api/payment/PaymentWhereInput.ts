import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RideWhereUniqueInput } from "../ride/RideWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  paymentMethod?: "Option1";
  paymentStatus?: "Option1";
  ride?: RideWhereUniqueInput;
  transactionDate?: DateTimeNullableFilter;
};
