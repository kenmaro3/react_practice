import { combineReducers, createStore } from "redux";

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case "CHANGE_NAME":
      //state.name = action.payload;
      state = {...state, name: action.payload}
      break;
    case "CHANGE_AGE":
      //state.age = action.payload;
      state = {...state, age: action.payload}
      break;
  }
  return state;
}
const tweetsReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TWEET":
      state = state.concat({id: Date.now(), text: action.payload});
  }
  return state;
}
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
      console.log("store changed", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Tsutomu"});
store.dispatch({type: "CHANGE_AGE", payload: 35});
store.dispatch({type: "CHANGE_AGE", payload: 36});
store.dispatch({type: "ADD_TWEET", payload: "OMG LIKE LOL"});
store.dispatch({type: "ADD_TWEET", payload: "I am so like seriously like totally like right now"});