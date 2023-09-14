import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import Store from "./redux/Store";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <AppRoutes />
      </Provider>
    </>
  );
};

export default App;
