import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { rdb } from "../../config/firebase";


export const fetchSimplifiedTask = createAsyncThunk("decoded/fetchPosts", async () => {
    const promise = rdb
        .ref()
        .child("Posts")
        .child("NewsSimplifiedPosts")
        .get()
        .then((snapshot) => {
            const data = [];
            let count = -1;

            if (snapshot.exists()) {
                snapshot.forEach((doc) => {
                    count++;
                    data.push({
                        title: doc.val().title,
                        clickCount: doc.val().ClickCount,
                        articleDate: doc.val().articleDate,
                        id: doc.val().id,
                        imageUrl: doc.val().imageUrl,
                        desc: doc.val().desc,
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

export const simplified = createSlice({
    name: "simplified",
    initialState: {
        tasksimplified: null,
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
        [fetchSimplifiedTask.fulfilled]: (state, action) => {
            state.tasksimplified = action.payload;
            state.loading = false;
        },
        [fetchSimplifiedTask.pending]: (state) => {
            state.loading = true;
        },
        [fetchSimplifiedTask.rejected]: (state, action) => {
            state.err = action.error;
            state.loading = false;
        }
    }
});
