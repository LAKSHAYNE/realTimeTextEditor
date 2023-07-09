import { createSlice } from "@reduxjs/toolkit";
//import { UPDATE } from '../actionTypes/actionTypes'

export const editorSlice = createSlice({
  name: "editor",
  initialState: {
    content: "",
  },
  reducers: {
    update: (state, action) => {
      state.content = action.payload;
    },
  },
});
export const { update } = editorSlice.actions;
export default editorSlice.reducer;
