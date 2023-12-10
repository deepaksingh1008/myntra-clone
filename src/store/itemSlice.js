import { createSlice } from "@reduxjs/toolkit";
import { DEFALUT_ITEMS } from "../data/items";
const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItem: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsActions = itemSlice.actions;

export default itemSlice;
