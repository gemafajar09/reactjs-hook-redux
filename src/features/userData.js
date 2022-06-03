import { createSlice,createAsyncThunk,createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const tampilUser = createAsyncThunk("user/getData", async () => {
    const res = await axios.get("http://localhost:5000/user");
    return res.data;
});

export const simpanUser = createAsyncThunk("user/simpanData", async ({nama,alamat}) => {
    const res = await axios.post("http://localhost:5000/user",{
        nama,
        alamat
    });
    return res.data;
});

export const updateUser = createAsyncThunk("user/updateUser", async ({id,nama,alamat}) => {
    const res = await axios.patch(`http://localhost:5000/user/${id}`,{
        nama,
        alamat
    });
    return res.data;
});

export const hapusUser = createAsyncThunk("user/hapusData", async (id) => {
    await axios.delete(`http://localhost:5000/user/${id}`);
    return id;
});

const dataEntityAdapter = createEntityAdapter({
    selectId: (user) => user.id,
});

const getDataUser = createSlice({
    name: "user",
    initialState: dataEntityAdapter.getInitialState(),
    extraReducers: {
        [tampilUser.fulfilled]: (state, action) => {
            dataEntityAdapter.setAll(state, action.payload);
        },
        [simpanUser.fulfilled]: (state, action) => {
            dataEntityAdapter.addOne(state, action.payload);
        },
        [updateUser.fulfilled]: (state, action) => {
            dataEntityAdapter.updateOne(state, {id:action.payload.id, changes:action.payload});
        },
        [hapusUser.fulfilled]: (state, action) => {
            dataEntityAdapter.removeOne(state, action.payload);
        }
    }
});

export const dataUser = dataEntityAdapter.getSelectors(state => state.user);
export default getDataUser.reducer;