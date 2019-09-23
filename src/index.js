import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./containers/App"
import "tachyons"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { searchRobot } from "./reducers"

let store = createStore(
  searchRobot,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
  <Provider store={store}>
    {" "}
    <App />
  </Provider>,
  document.getElementById("root")
)
