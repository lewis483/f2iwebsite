import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PoultryContentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="PublishedDate" source="publishedDate" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
