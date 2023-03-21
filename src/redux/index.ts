import { legacy_createStore as createStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer";

const reducers = combineReducers({
    todoReducer
})

export const store = createStore(reducers)