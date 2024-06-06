import { Ride } from "../ride/Ride";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  paymentMethod?: "Option1" | null;
  paymentStatus?: "Option1" | null;
  ride?: Ride | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
