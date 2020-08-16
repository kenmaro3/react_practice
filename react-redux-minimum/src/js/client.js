import { applyMiddleware, createStore } from "redux";

const reducer = (state = 0, action) => {
  switch(action.type) {
    case "INC":
      //state = state + 1;
      return state + action.payload;
      break;
    case "DEC":
      //state = state - 1;
      return state - action.payload;
      break;
  }
  return state;
}

const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
}

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

//store.dispatch({type: "INC"});
//store.dispatch({type: "INC"});
//store.dispatch({type: "DEC"});
//store.dispatch({type: "DEC"});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 2});
store.dispatch({type: "INC", payload: 22});
store.dispatch({type: "INC", payload: 222});
store.dispatch({type: "DEC", payload: 1000});
