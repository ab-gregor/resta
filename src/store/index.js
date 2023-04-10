import { createStore } from "redux";
import getReducer from "../reducer/getReducer";

const store = createStore(getReducer)

export default store;