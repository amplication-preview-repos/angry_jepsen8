import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DRIVER_TITLE_FIELD } from "./DriverTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DriverShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="driverExperience" source="driverExperience" />
        <TextField label="driverLicenseNumber" source="driverLicenseNumber" />
        <TextField label="driverPassport" source="driverPassport" />
        <TextField label="driverPassportImage" source="driverPassportImage" />
        <TextField label="driverRating" source="driverRating" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Ride" target="driverId" label="Rides">
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
