import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { rdb } from "../../config/firebase";


export const fetchDecodedTask = createAsyncThunk("decoded/fetchPosts", async () => {
    const promise = rdb
        .ref()
        .child("Posts")
        .child("NewsDecodedPosts")
        .get()
        .then((snapshot) => {
            const data = [];
            let count = -1;


            if (snapshot.exists()) {
                // console.log(snapshot.val());
                snapshot.forEach((doc) => {
                    count++;

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
                        index: count,
                        videoId: doc.val().videoId,

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
    data.sort((a, b) => {
        return b.rawdate - a.rawdate
    })
    return data;
});

export const decoded = createSlice({
    name: "decoded",
    initialState: {
        taskdecoded: null,
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
        [fetchDecodedTask.fulfilled]: (state, action) => {
            state.taskdecoded = action.payload;
            // console.log("000000000  ------- ", action.payload)

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
