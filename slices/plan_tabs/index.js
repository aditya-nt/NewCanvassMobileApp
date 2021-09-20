import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { rdb } from "../../config/firebase";


export const fetchPlanTabsTask = createAsyncThunk("clat_tabs/fetchPosts", async () => {
    const promise = rdb
        .ref()
        .child("Subscription")
        .child("Plans")
        .child("Tabs")
        .get()
        .then((snapshot) => {
            const data = [];
            let count = -1;

            if (snapshot.exists()) {
                snapshot.forEach((doc) => {
                    count++;
                    data.push({
                        // id: doc.key,
                        // Section: doc.val().Section,
                        // TabName: doc.val().TabName,
                        // index: count,
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

export const plan_tabs = createSlice({
    name: "plan_tabs",
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
        [fetchPlanTabsTask.fulfilled]: (state, action) => {
            state.task = action.payload;
            // console.log(action.payload)r

            state.loading = false;
        },
        [fetchPlanTabsTask.pending]: (state) => {
            state.loading = true;
        },
        [fetchPlanTabsTask.rejected]: (state, action) => {
            state.err = action.error;
            state.loading = false;
        }
    }
});
