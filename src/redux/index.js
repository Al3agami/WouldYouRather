import { createStore } from 'redux';
import middlewares from "./middlewares";
import reducers from "./reducers";

export const store = createStore(reducers, middlewares);