import { configureStore } from "@reduxjs/toolkit";
import { newsDetails } from "./newsSlice";


export const store = configureStore({
  reducer: {
    app: newsDetails,
  },
});