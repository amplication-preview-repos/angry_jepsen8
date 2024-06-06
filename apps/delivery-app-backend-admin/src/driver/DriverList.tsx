import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DriverList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Drivers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="driverExperience" source="driverExperience" />
        <TextField label="driverLicenseNumber" source="driverLicenseNumber" />
        <TextField label="driverPassport" source="driverPassport" />
        <TextField label="driverPassportImage" source="driverPassportImage" />
        <TextField label="driverRating" source="driverRating" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
