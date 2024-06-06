import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RideTitle } from "../ride/RideTitle";

export const DriverEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="driverExperience"
          source="driverExperience"
        />
        <TextInput label="driverLicenseNumber" source="driverLicenseNumber" />
        <TextInput label="driverPassport" source="driverPassport" />
        <div />
        <NumberInput label="driverRating" source="driverRating" />
        <ReferenceArrayInput
          source="rides"
          reference="Ride"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RideTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
