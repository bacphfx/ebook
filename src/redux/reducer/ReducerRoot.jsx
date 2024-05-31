import { combineReducers } from "redux";
import authReducer from "./authReducer";

const ReducerRoot = combineReducers({
  auth: authReducer,
});

export default ReducerRoot;
