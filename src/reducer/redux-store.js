import {combineReducers,  legacy_createStore as createStore } from "redux";
import ListReducer from "./ToDoListReducer";

let reducers = combineReducers({
    taskPage: ListReducer
});

let store = createStore(reducers);

export default store