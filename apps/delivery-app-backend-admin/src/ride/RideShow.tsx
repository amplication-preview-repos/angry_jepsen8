import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RIDE_TITLE_FIELD } from "./RideTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RideShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
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
        <ReferenceManyField
          reference="Payment"
          target="rideId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="paymentMethod" source="paymentMethod" />
            <TextField label="paymentStatus" source="paymentStatus" />
            <ReferenceField label="Ride" source="ride.id" reference="Ride">
              <TextField source={RIDE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="transactionDate" source="transactionDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
