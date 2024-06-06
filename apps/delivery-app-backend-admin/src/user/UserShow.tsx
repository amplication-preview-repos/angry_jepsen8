import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Ride" target="userId" label="Rides">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="dropoffLocation" source="dropoffLocation" />
            <TextField label="dropoffTime" source="dropoffTime" />
            <TextField label="fare" source="fare" />
            <TextField label="ID" source="id" />
            <TextField label="pickupLocation" source="pickupLocation" />
            <TextField label="pickupTime" source="pickupTime" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
