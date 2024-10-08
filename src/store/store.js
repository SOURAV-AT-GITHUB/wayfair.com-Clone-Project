import { combineReducers, legacy_createStore } from "redux";
import { authReducer, cartReducer } from "./reducers";

const rootReducer = combineReducers({
      auth : authReducer,
      cart : cartReducer
})

export const store = legacy_createStore(rootReducer)