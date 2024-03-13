import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TaskList from "./components/TaskList";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TaskList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
