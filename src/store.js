import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import ReducerRoot from "./redux/reducer/ReducerRoot";

const store = createStore(ReducerRoot, applyMiddleware(thunk));

export default store;
