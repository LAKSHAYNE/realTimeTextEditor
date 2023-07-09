import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./reducers/editorReducer";
export default configureStore({
  reducer: {
    editor: editorReducer,
  },
});
