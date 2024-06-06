import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RideTitle } from "../ride/RideTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="hashedPassword" source="hashedPassword" />
        <TextInput label="homeAddress" multiline source="homeAddress" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="passwordHash" source="passwordHash" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="rides"
          reference="Ride"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RideTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="userAddress" multiline source="userAddress" />
        <TextInput label="Username" source="username" />
        <TextInput label="userPasswordHash" source="userPasswordHash" />
        <TextInput label="userPhoneNumber" source="userPhoneNumber" />
      </SimpleForm>
    </Create>
  );
};
