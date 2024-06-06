import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FarmProductList } from "./farmProduct/FarmProductList";
import { FarmProductCreate } from "./farmProduct/FarmProductCreate";
import { FarmProductEdit } from "./farmProduct/FarmProductEdit";
import { FarmProductShow } from "./farmProduct/FarmProductShow";
import { VendorList } from "./vendor/VendorList";
import { VendorCreate } from "./vendor/VendorCreate";
import { VendorEdit } from "./vendor/VendorEdit";
import { VendorShow } from "./vendor/VendorShow";
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
        title={"Farm Product Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FarmProduct"
          list={FarmProductList}
          edit={FarmProductEdit}
          create={FarmProductCreate}
          show={FarmProductShow}
        />
        <Resource
          name="Vendor"
          list={VendorList}
          edit={VendorEdit}
          create={VendorCreate}
          show={VendorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
