import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

type EntryArgs = {
    name:string, phone:string
}
export const fetchEntry = createAsyncThunk<string,EntryArgs>(
    "form/fetchByStatus",
    async ({name, phone} ) => {
        let response = await axios.post("http://localhost:3004/entry", {
            name: name,
            phone: phone
        });
        return "все хорошо"
    }
);


const initialState:{name:string,phone:string,status:string,} = {
    name: '',
    phone:'',
    status: "loading"
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName(state, action:PayloadAction<string>) {
            state.name = action.payload
        },
        setPhone(state, action:PayloadAction<string>) {
            state.phone = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchEntry.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchEntry.fulfilled, (state, action) => {
            state.status = 'success'
        })
    },
})

// Action creators are generated for each case reducer function
export const { setName,setPhone} = formSlice.actions

export default formSlice.reducer