import { Driver as TDriver } from "../api/driver/Driver";

export const DRIVER_TITLE_FIELD = "driverLicenseNumber";

export const DriverTitle = (record: TDriver): string => {
  return record.driverLicenseNumber?.toString() || String(record.id);
};
