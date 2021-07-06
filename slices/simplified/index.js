import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { rdb } from "../../firebase";


export const fetchSimplifiedTask = createAsyncThunk("decoded/fetchPosts", async () => {
    const promise = rdb
        .ref()
        .child("Posts")
        .child("NewsSimplifiedPosts")
        .get()
        .then((snapshot) => {
            const data = [];

            if (snapshot.exists()) {
                // console.log(snapshot.val());
                snapshot.forEach((doc) => {


                    data.push({
                        title: doc.val().title,
                        clickCount: doc.val().ClickCount,
                        articleDate: doc.val().articleDate,
                        id: doc.val().id,
                        imageUrl: doc.val().imageUrl,

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
        task: null,
        loading: true,
        err: null
    },
    reducers: {

    },
    extraReducers: {
        [fetchSimplifiedTask.fulfilled]: (state, action) => {
            state.task = action.payload;
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
