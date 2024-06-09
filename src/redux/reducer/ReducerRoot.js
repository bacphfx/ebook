import { applyMiddleware, combineReducers } from "redux";
import authReducer from "./authReducer";
import bookReducer from "./bookReducer";

const ReducerRoot = combineReducers({
  auth: authReducer,
  purchasedBooks: bookReducer,
});

export default ReducerRoot;
