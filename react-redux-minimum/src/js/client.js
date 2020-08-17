import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const reducer = (state={}, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
      break;
    case "FETCH_USERS_ERROR":
      break;
    case "RECEIVE_USERS":
      break;
  }
  return state;
};

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS_START"});
  axios.get("http://localhost:18080").then((response) => {
    dispatch({type: "RECEIVE_USERS", payload: response.data});
  }).catch((err) => {
    dispatch({type: "FETCH_USERS_ERROR", payload: err});
  });
});
