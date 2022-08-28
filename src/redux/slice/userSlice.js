import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../apis/userApi";
import { fetchUserData } from "../thunks/userThunk";

const initialState = {
    data: null,
    loading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set(state, action) {
            return {
                ...action.payload,
            }
        },
        update(state, action) {
            state.data = {
                ...state.data,
                ...action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchUserData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })

        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
    }
});


export const userAction = userSlice.actions;

export default userSlice.reducer;