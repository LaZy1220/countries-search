import {axios} from 'axios'
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import * as api from '../config'

export const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(
        thunk.withExtraArgument({
            client: axios,
            api
}))))