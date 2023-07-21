import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTopic: "",
  activeCategory: "",
  activeTopicOfCategory: "",
  activeListName: "",
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
    handleChangeTopicOfCategory: (state, { payload }) => {
      state.activeTopicOfCategory = payload;
    },
    handleChangeListName: (state, { payload }) => {
      state.activeListName = payload;
    },
  },
});

export const {
  handleChangeCategory,
  handleChangeTopic,
  handleChangeListName,
  handleChangeTopicOfCategory,
} = GlobalStates.actions;

export default GlobalStates.reducer;
