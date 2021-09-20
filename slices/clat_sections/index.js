import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { rdb } from "../../config/firebase";


export const fetchCLATSectionsTask = createAsyncThunk("clat_sections/fetchPosts", async () => {
    const promise = rdb
        .ref()
        .child("Pages")
        .child("ClatPage")
        .child("Sections")
        .get()
        .then((snapshot) => {
            const data = [];
            let count = -1;

            if (snapshot.exists()) {
                snapshot.forEach((doc) => {
                    count++;
                    data.push({
                        id: doc.key,
                        index: count,
                        data: doc.val()

                        // CardText: doc.val().CardText,
                        // CardType: doc.val().CardType,
                        // RedirectTo: doc.val().RedirectTo,
                        // RedirectType: doc.val().RedirectType,
                        // Width: doc.val().Width,

                    });

                    // console.log("sectionalData", doc.val())

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

export const clat_sections = createSlice({
    name: "clat_sections",
    initialState: {
        task: null,
        loading: true,
        err: null,
        selectedPost: [],
        test: "wwwwww"
    },
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost.push(action.payload)
            // console.log("array_add", state.selectedPost)
        },
        clearSelected: (state, action) => {
            state.selectedPost = []
            // console.log("cleared", state.selectedPost.lastIndex)
        },
        popSelected: (state, action) => {
            state.selectedPost.pop()
            // console.log("popped", state.selectedPost.lastIndex)
        }


    },
    extraReducers: {
        [fetchCLATSectionsTask.fulfilled]: (state, action) => {
            state.task = action.payload;
            // console.log(action.payload)r

            state.loading = false;
        },
        [fetchCLATSectionsTask.pending]: (state) => {
            state.loading = true;
        },
        [fetchCLATSectionsTask.rejected]: (state, action) => {
            state.err = action.error;
            state.loading = false;
        }
    }
});
