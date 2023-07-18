import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTopic: "",
  activeCategory: "",
};

const GlobalStates = createSlice({
  name: "globalStates",
  initialState,
  reducers: {
    handleChangeTopic: (state, { payload }) => {
      state.activeTopic = payload;
    },
    handleChangeCategory: (state, { payload }) => {
      state.activeCategory = payload;
    },
  },
});

export const { handleChangeCategory, handleChangeTopic } = GlobalStates.actions;

export default GlobalStates.reducer;
