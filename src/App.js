import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import NavBar from "./Components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";
import { rootReducer } from "./store/reducers";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <MainRoutes />
    </Provider>
  );
};

export default App;
