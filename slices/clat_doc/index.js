import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const clat_doc = createSlice({
    name: "clat_doc",
    initialState: {
        currentLink: "https://www.google.com"
    },
    reducers: {
        setSelectedLink: (state, action) => {
            state.currentLink = action.payload
            // console.log("array_add", state.selectedPost)
        }

    }
});
