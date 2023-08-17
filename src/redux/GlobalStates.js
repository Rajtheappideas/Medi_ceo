import { createSlice, current } from "@reduxjs/toolkit";
import jsonData from "../placeholder.json";

const initialState = {
  activeMainCategory: "",
  activeSubCategory: null,
  nodeListOfSubcategory: null,
  showEditBox: false,
  showSubCategoryList: false,
  data: jsonData,
  nodes: [],
  activeSingleNode: null,
  resultPage: null,
  resultPageDirectAfterNodeListOfSubcategory: null,
  dataSendToEditBox: null,
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
      const findData = state.data.find(
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
          state.activeSingleNode = findData;
        }
      } else if (findData?.type === "resultPage" && state.nodes.length > 0) {
        state.resultPage = findData;
      } else if (findData?.type === "resultPage" && state.nodes.length === 0) {
        state.resultPageDirectAfterNodeListOfSubcategory = findData;
      }
    },

    handleChangeNodes: (state) => {
      const deleteLastNode = state.nodes.splice(-1);
      const nodesCopy = [...state.nodes];
      state.activeSingleNode = nodesCopy.splice(-1)[0];
      state.nodes = state.nodes;
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

    handleChangeOrderOfNodeListOfSubcategory: (state, { payload }) => {
      state.nodeListOfSubcategory = {
        ...state.nodeListOfSubcategory,
        boxes: payload,
      };
      state.data = state.data.map((box) =>
        box?.id === state.nodeListOfSubcategory?.id
          ? { ...box, boxes: payload }
          : box
      );
    },

    handleChangeOrderOfActiveSingleNode: (state, { payload }) => {
      state.activeSingleNode = { ...state.activeSingleNode, boxes: payload };
      state.data = state.data.map((box) =>
        box?.id === state.activeSingleNode?.id
          ? { ...box, boxes: payload }
          : box
      );
    },

    handleChangeDataSendToEditbox: (state, { payload }) => {
      state.dataSendToEditBox = payload;
    },

    handleClearDataSendToEditbox: (state) => {
      state.dataSendToEditBox = null;
    },

    handleChangeValueOfDataFromEditBox: (
      state,
      { payload: { title, fieldTitle, resultOrNodeId, id, resultOrNodeIdOld } }
    ) => {
      state.dataSendToEditBox = {
        ...state.dataSendToEditBox,
        title,
        resultOrNodeId,
        fieldTitle,
      };

      state.nodeListOfSubcategory = {
        ...state.nodeListOfSubcategory,
        boxes: state.nodeListOfSubcategory?.boxes.map((box) =>
          box?.contentfulId === id
            ? { ...box, title, resultOrNodeId, fieldTitle }
            : box
        ),
      };

      state.data = state.data.map((box) =>
        box?.id === state.nodeListOfSubcategory?.id
          ? {
              ...box,
              boxes: box?.boxes?.map((data) =>
                data?.contentfulId === id
                  ? { ...data, title, resultOrNodeId, fieldTitle }
                  : data
              ),
            }
          : box
      );

      state.data = state.data.map((box) =>
        box?.id === resultOrNodeIdOld ? { ...box, id: resultOrNodeId } : box
      );

      if (state.nodes.length > 0) {
        state.nodes = state.nodes.map((node) =>
          node?.id === state.activeSingleNode?.id
            ? {
                ...node,
                boxes: node?.boxes?.map((data) =>
                  data?.contentfulId === id
                    ? { ...data, title, resultOrNodeId, fieldTitle }
                    : data
                ),
              }
            : node
        );
      }

      if (state.activeSingleNode === null) {
        state.data = state.data.map((box) =>
          box?.id === state.activeSingleNode?.id
            ? {
                ...box,
                boxes: box?.boxes?.map((data) =>
                  data?.contentfulId === id
                    ? { ...data, title, resultOrNodeId, fieldTitle }
                    : data
                ),
              }
            : box
        );
        state.activeSingleNode = {
          ...state.activeSingleNode,
          boxes: state.activeSingleNode?.boxes.map((box) =>
            box?.contentfulId === id
              ? { ...box, title, resultOrNodeId, fieldTitle }
              : box
          ),
        };
      }
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
  handleChangeOrderOfNodeListOfSubcategory,
  handleClearDataSendToEditbox,
  handleChangeDataSendToEditbox,
  handleChangeOrderOfActiveSingleNode,
  handleChangeValueOfDataFromEditBox,
} = GlobalStates.actions;

export default GlobalStates.reducer;
