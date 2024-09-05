// main.js, index.js or whatever the entry point is named
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Blog from "./Blog.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Blog />
    </Provider>
  </BrowserRouter>
);
