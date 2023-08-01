import { createSlice } from "@reduxjs/toolkit";
import jsonData from "../placeholder.json";

const initialState = {
  activeMainCategory: "",
  activeSubCategory: null,
  nodeListOfSubcategory: [],
  showEditBox: false,
  showSubCategoryList: false,
  data: jsonData,
  nodes: [],
  activeNodes: [],
  activeSingleNode: null,
  resultPage: null,
  resultPageDirectAfterNodeListOfSubcategory: null,
};

const GlobalStates = createSlice({
  name: "globalStates",
  initialState,
  reducers: {
    handleChangeMainCategory: (state, { payload }) => {
      state.activeMainCategory = payload;
    },
    handleChangeSubCategory: (state, { payload }) => {
      if (payload === null) {
        state.activeSubCategory = null;
      } else {
        state.activeSubCategory = { title: payload?.title, id: payload?.id };
      }
    },
    findDataReleatedSubcategory: (state, { payload }) => {
      const findData = state.data.filter(
        (category) => category?.id === state.activeSubCategory?.id
      );
      if (findData) {
        state.nodeListOfSubcategory = findData;
      }
    },
    findDataOfNodes: (state, { payload }) => {
      const findData = state.data.find((category) => category?.id === payload);
      if (findData && findData?.type === "nodePage") {
        const duplicateData = state.nodes.find(
          (node) => node.id === findData?.id
        );
        if (!duplicateData) {
          state.nodes = [...state.nodes, findData];
          state.activeNodes = [...state.activeNodes, findData?.id];
          state.activeSingleNode = findData;
        }
      } else if (findData?.type === "resultPage" && state.nodes.length > 0) {
        state.resultPage = findData;
      } else if (findData?.type === "resultPage" && state.nodes.length === 0) {
        state.resultPageDirectAfterNodeListOfSubcategory = findData;
      }
    },
    handleChangeNodes: (state, { payload }) => {
      const deleteLastNode = state.nodes.splice(-1);
      const deleteLastActiveNode = state.activeNodes.splice(-1);
      const nodesCopy = [...state.nodes];
      state.activeSingleNode = nodesCopy.splice(-1)[0];
      state.nodes = state.nodes;
      state.activeNodes = state.activeNodes;
    },
    handleChangeNodeListOfSubcategory: (state, { payload }) => {
      state.nodeListOfSubcategory = payload;
    },
    handleChangeResultPage: (state) => {
      state.resultPage = null;
      state.resultPageDirectAfterNodeListOfSubcategory = null;
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
  handleChangeSubCategory,
  handleChangeMainCategory,
  handleChangeListName,
  handleChangeNodeListOfSubcategory,
  handleToggleEditBox,
  findDataReleatedSubcategory,
  handleToggleShowSubCategoryList,
  findDataOfNodes,
  handleChangeNodes,
  handleChangeResultPage,
} = GlobalStates.actions;

export default GlobalStates.reducer;
