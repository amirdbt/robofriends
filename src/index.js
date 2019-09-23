import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./containers/App"
import "tachyons"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { searchRobot } from "./reducers"
import { createLogger } from "redux-logger"

const logger = createLogger()
const store = createStore(searchRobot, applyMiddleware(logger))
ReactDOM.render(
  <Provider store={store}>
    {" "}
    <App />
  </Provider>,
  document.getElementById("root")
)
