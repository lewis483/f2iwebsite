import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { FarmerTitle } from "../farmer/FarmerTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="farmer.id" reference="Farmer" label="Farmer">
          <SelectInput optionText={FarmerTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="Name" source="name" />
        <div />
        <NumberInput label="Price" source="price" />
        <NumberInput step={1} label="Quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
