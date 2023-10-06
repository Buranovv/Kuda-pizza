import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import LanguageContextProvider from "./contexts/LanguageContext.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import CartContextProvider from "./contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
