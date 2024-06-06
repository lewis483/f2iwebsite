import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FarmerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Farmers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="FarmName" source="farmName" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastName" source="lastName" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
