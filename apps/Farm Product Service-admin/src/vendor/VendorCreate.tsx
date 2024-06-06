import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FarmProductTitle } from "../farmProduct/FarmProductTitle";

export const VendorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
