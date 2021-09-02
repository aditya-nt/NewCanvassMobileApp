import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { rdb } from "../../config/firebase";


export const fetchCLATTabsTask = createAsyncThunk("clat_tabs/fetchPosts", async () => {
    const promise = rdb
        .ref()
        .child("Pages")
        .child("ClatPage")
        .child("Tabs")
        .get()
        .then((snapshot) => {
            const data = [];
            let count = -1;

            if (snapshot.exists()) {
                snapshot.forEach((doc) => {
                    count++;
                    data.push({
                        id: doc.key,
                        Section: doc.val().Section,
                        TabName: doc.val().TabName,
                        index: count,
                    });

                });
            } else {
                console.log("No data available");
            }

            return data;
        })
        .catch((error) => {
            console.error(error);
        });

    const data = await promise;
    return data;
});

export const clat_tabs = createSlice({
    name: "clat_tabs",
    initialState: {
        task: null,
        loading: true,
        err: null,
        selectedPost: 0
    },
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload
        }

    },
    extraReducers: {
        [fetchCLATTabsTask.fulfilled]: (state, action) => {
            state.task = action.payload;
            // console.log(action.payload)r

            state.loading = false;
        },
        [fetchCLATTabsTask.pending]: (state) => {
            state.loading = true;
        },
        [fetchCLATTabsTask.rejected]: (state, action) => {
            state.err = action.error;
            state.loading = false;
        }
    }
});
