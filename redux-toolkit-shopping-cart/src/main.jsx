import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// el provider es el que le va a dar acceso a los componentes a la store
import { Provider } from "react-redux";
// el conjunto de slice que puede tener un app
import { store } from "./store";
//importar de manera general los styles
import "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
