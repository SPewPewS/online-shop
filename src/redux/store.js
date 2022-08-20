import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import catsReducer from "./cats-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    cats: catsReducer
});


const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;