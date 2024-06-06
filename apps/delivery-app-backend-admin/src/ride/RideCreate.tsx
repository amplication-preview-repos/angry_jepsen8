import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { UserTitle } from "../user/UserTitle";

export const RideCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <TextInput label="dropoffLocation" multiline source="dropoffLocation" />
        <DateTimeInput label="dropoffTime" source="dropoffTime" />
        <NumberInput label="fare" source="fare" />
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <TextInput label="pickupLocation" multiline source="pickupLocation" />
        <DateTimeInput label="pickupTime" source="pickupTime" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
