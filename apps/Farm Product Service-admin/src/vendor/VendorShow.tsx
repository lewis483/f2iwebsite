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

import { VENDOR_TITLE_FIELD } from "./VendorTitle";

export const VendorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Contact" source="contact" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ProductsSupplied" source="productsSupplied" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VendorName" source="vendorName" />
        <ReferenceManyField
          reference="FarmProduct"
          target="vendorId"
          label="FarmProducts"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Price" source="price" />
            <TextField label="ProductName" source="productName" />
            <TextField label="Quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Vendor"
              source="vendor.id"
              reference="Vendor"
            >
              <TextField source={VENDOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
