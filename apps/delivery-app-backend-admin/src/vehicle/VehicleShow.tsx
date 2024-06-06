import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const VehicleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="licensePlate" source="licensePlate" />
        <TextField label="make" source="make" />
        <TextField label="model" source="model" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year" source="year" />
      </SimpleShowLayout>
    </Show>
  );
};
