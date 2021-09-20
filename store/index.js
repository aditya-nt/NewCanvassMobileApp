import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { NewsDecoded } from "../slices";
import { clat_doc, clat_tabs, decoded, simplified } from "../slices";
import { reducer as firebase } from "react-redux-firebase";
import { clat_sections, fetchCLATSectionsTask } from "../slices/clat_sections";

const reducers = combineReducers({
    firebase,
    simplified: simplified.reducer,
    decoded: decoded.reducer,
    clat_tabs: clat_tabs.reducer,
    clat_sections: clat_sections.reducer,
    clat_doc: clat_doc.reducer,
})

export const store = configureStore({
    reducer: reducers
})

// store.dispatch(fetchCLATSectionsTask({ limit: 1 }))

