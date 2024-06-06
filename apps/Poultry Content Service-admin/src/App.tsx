import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PoultryContentList } from "./poultryContent/PoultryContentList";
import { PoultryContentCreate } from "./poultryContent/PoultryContentCreate";
import { PoultryContentEdit } from "./poultryContent/PoultryContentEdit";
import { PoultryContentShow } from "./poultryContent/PoultryContentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Poultry Content Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PoultryContent"
          list={PoultryContentList}
          edit={PoultryContentEdit}
          create={PoultryContentCreate}
          show={PoultryContentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
