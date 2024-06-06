import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FarmProductTitle } from "../farmProduct/FarmProductTitle";

export const VendorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Contact" source="contact" />
        <ReferenceArrayInput
          source="farmProducts"
          reference="FarmProduct"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FarmProductTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="ProductsSupplied"
          multiline
          source="productsSupplied"
        />
        <TextInput label="VendorName" source="vendorName" />
      </SimpleForm>
    </Edit>
  );
};
