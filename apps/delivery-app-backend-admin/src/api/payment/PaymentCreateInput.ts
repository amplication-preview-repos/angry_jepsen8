import { RideWhereUniqueInput } from "../ride/RideWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  paymentMethod?: "Option1" | null;
  paymentStatus?: "Option1" | null;
  ride?: RideWhereUniqueInput | null;
  transactionDate?: Date | null;
};
