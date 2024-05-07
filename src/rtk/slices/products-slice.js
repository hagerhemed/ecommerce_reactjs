import { createSlice } from "@reduxjs/toolkit";
import { buildCreateApi } from "@reduxjs/toolkit/query";

const productsSlice = createSlice({
    initialState: [],
    name:"productsSlice",
    reducers: {},
    extraReducers: (builder) => {}
})
export const {} = productsSlice.actions;

export default productsSlice.reducer