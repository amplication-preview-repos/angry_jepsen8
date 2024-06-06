import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="address" source="address" />
        <TextField label="contactNumber" source="contactNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="hashedPassword" source="hashedPassword" />
        <TextField label="homeAddress" source="homeAddress" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="passwordHash" source="passwordHash" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userAddress" source="userAddress" />
        <TextField label="Username" source="username" />
        <TextField label="userPasswordHash" source="userPasswordHash" />
        <TextField label="userPhoneNumber" source="userPhoneNumber" />
      </Datagrid>
    </List>
  );
};
