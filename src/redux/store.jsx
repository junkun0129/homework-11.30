import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { johnReducer } from "../reducers/johnReducer";

const store = createStore(johnReducer, applyMiddleware(logger));

export const AppProvider = ({children})=>
    <Provider store={store}>{children}</Provider>