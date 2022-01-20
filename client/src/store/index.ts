import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { rootWatcher } from "./saga";
const sagaMiddLeware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddLeware));
sagaMiddLeware.run(rootWatcher);
