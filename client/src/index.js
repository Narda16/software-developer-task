import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { storeConfiguration } from "./store/store";
import App from "./App";

import "./index.css";
import { Provider } from "react-redux";

axios.defaults.baseURL = "http://localhost:5000";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={storeConfiguration}>
      <App />
    </Provider>
  </BrowserRouter>
);
