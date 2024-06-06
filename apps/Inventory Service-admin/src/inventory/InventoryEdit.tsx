import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Product ID" source="productId" />
        <NumberInput
          step={1}
          label="QuantityAvailable"
          source="quantityAvailable"
        />
      </SimpleForm>
    </Edit>
  );
};
