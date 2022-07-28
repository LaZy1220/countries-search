import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import { persistStore,persistReducer } from "redux-persist";

const persistConfig={
    key:'root',
    storage,
    whitelist:['theme']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = createStore(persistedReducer,composeWithDevTools(
    applyMiddleware(thunk)))
export const persistor = persistStore(store)