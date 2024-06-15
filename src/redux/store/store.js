/** @format */

import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "../reducer/reducer";

const store = createStore(reducer, composeWithDevTools());

export default store;
/////// Для кожного айтему, стану ми будемо створвати ключі