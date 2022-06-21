// import { createStore } from "@react-three/fiber/dist/declarations/src/core/store";
import { applyMiddleware, createStore,  } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";


export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))