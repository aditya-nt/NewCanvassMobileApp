import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { NewsDecoded } from "../slices";
import { decoded, simplified } from "../slices";


const reducers = combineReducers({

    simplified: simplified.reducer,
    decoded: decoded.reducer,
})

export const store = configureStore({
    reducer: reducers
})

