import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { Provider } from "react-redux";

// Tạo container cho ứng dụng của bạn
const container = document.getElementById("root");

// Tạo root bằng cách sử dụng createRoot
const root = createRoot(container);

// Render ứng dụng vào root
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// Đăng ký service worker
serviceWorker.register();
