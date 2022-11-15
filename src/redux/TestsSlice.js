import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rightAnswers: 0,
  wrongAnswers: 0,
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    getRightAnswers: (state) => {
      state.rightAnswers = state.rightAnswers + 1;
    },
    getWrongAnswers: (state) => {
      state.wrongAnswers = state.wrongAnswers + 1;
    },
  },
});

export const { getRightAnswers, getWrongAnswers } = testsSlice.actions;

export default testsSlice.reducer;
