import { configureStore } from "@reduxjs/toolkit";
import MyQuestions from "./questionSlice";

export const store = configureStore({
    reducer : { questions : MyQuestions  }
});