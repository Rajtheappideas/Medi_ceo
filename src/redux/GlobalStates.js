import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTopic: "",
  activeCategory: "",
  activeTopicOfCategory: "",
  activeListName: "",
  showEditBox: false,
  showSubCategoryList: false,
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
    handleToggleEditBox: (state, { payload }) => {
      state.showEditBox = payload;
    },
    handleToggleShowSubCategoryList: (state, { payload }) => {
      state.showSubCategoryList = payload;
    },
  },
});

export const {
  handleChangeCategory,
  handleChangeTopic,
  handleChangeListName,
  handleChangeTopicOfCategory,
  handleToggleEditBox,
  handleToggleShowSubCategoryList,
} = GlobalStates.actions;

export default GlobalStates.reducer;
