import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

export default () => {
  const store = createStore(rootReducer, applyMiddleware());
  return store;
};
