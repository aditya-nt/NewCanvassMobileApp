import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { rdb } from "../../firebase";


export const fetchDecodedTask = createAsyncThunk("decoded/fetchPosts", async () => {
    const promise = rdb
        .ref()
        .child("Posts")
        .child("NewsDecodedPosts")
        .get()
        .then((snapshot) => {
            const data = [];

            if (snapshot.exists()) {
                // console.log(snapshot.val());
                snapshot.forEach((doc) => {
                    let imgs = []
                    imgs = doc.val().videoUrl.split('/')

                    const imageUrl = "https://img.youtube.com/vi/" + imgs[imgs.length - 1] + "/0.jpg"



                    data.push({
                        title: doc.val().title,
                        clickCount: doc.val().ClickCount,
                        articleDate: doc.val().articleDate,
                        id: doc.val().id,
                        videoUrl: doc.val().videoUrl,
                        imageUrl: imageUrl,

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

export const decoded = createSlice({
    name: "decoded",
    initialState: {
        task: null,
        loading: true,
        err: null
    },
    reducers: {

    },
    extraReducers: {
        [fetchDecodedTask.fulfilled]: (state, action) => {
            state.task = action.payload;
            state.loading = false;
        },
        [fetchDecodedTask.pending]: (state) => {
            state.loading = true;
        },
        [fetchDecodedTask.rejected]: (state, action) => {
            state.err = action.error;
            state.loading = false;
        }
    }
});
