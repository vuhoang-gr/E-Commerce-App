import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../apis/userApi";

export const fetchUserData = createAsyncThunk('user/fetchUserData', async (params, thunkAPI) => {
    const currentUser = await userApi.get();
    return currentUser;
})