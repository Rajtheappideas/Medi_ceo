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
  showExpirePopup: false,
  loggedIn: false,
  isIdleTimerStart: false,
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

    handleChangeOrderOfResultPage: (state, { payload }) => {
      state.resultPage = {
        ...state.resultPage,
        boxes: payload,
      };
      state.data = state.data.map((box) =>
        box?.id === state.resultPage?.id ? { ...box, boxes: payload } : box
      );
    },

    handleChangeOrderOfResultPageDirectAfterSubCategory: (
      state,
      { payload }
    ) => {
      state.resultPageDirectAfterNodeListOfSubcategory = {
        ...state.resultPageDirectAfterNodeListOfSubcategory,
        boxes: payload,
      };
      state.data = state.data.map((box) =>
        box?.id === state.resultPageDirectAfterNodeListOfSubcategory?.id
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
      {
        payload: {
          title,
          fieldTitle,
          resultOrNodeId,
          contentfulId,
          resultOrNodeIdOld,
        },
      }
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
          box?.contentfulId === contentfulId
            ? {
                ...box,
                title,
                resultOrNodeId,
                fieldTitle,
              }
            : box
        ),
      };

      state.data = state.data.map((box) =>
        box?.id === state.nodeListOfSubcategory?.id
          ? {
              ...box,
              boxes: box?.boxes?.map((data) =>
                data?.contentfulId === contentfulId
                  ? {
                      ...data,
                      title,
                      resultOrNodeId,
                      fieldTitle,
                    }
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
                  data?.contentfulId === contentfulId
                    ? {
                        ...data,
                        title,
                        resultOrNodeId,
                        fieldTitle,
                      }
                    : data
                ),
              }
            : node
        );
      }

      if (state.activeSingleNode !== null) {
        state.data = state.data.map((box) =>
          box?.id === state.activeSingleNode?.id
            ? {
                ...box,
                boxes: box?.boxes?.map((data) =>
                  data?.contentfulId === contentfulId
                    ? {
                        ...data,
                        title,
                        resultOrNodeId,
                        fieldTitle,
                      }
                    : data
                ),
              }
            : box
        );
        state.activeSingleNode = {
          ...state.activeSingleNode,
          boxes: state.activeSingleNode?.boxes.map((box) =>
            box?.contentfulId === contentfulId
              ? {
                  ...box,
                  title,
                  resultOrNodeId,
                  fieldTitle,
                }
              : box
          ),
        };
      }
      if (state.resultPage !== null) {
        state.resultPage = {
          ...state.resultPage,
          boxes: state.resultPage?.boxes.map((box) =>
            box?.contentfulId === contentfulId
              ? {
                  ...box,
                  title,
                  resultOrNodeId,
                  fieldTitle,
                }
              : box
          ),
        };
        state.data = state.data.map((box) =>
          box?.id === state.resultPage?.id
            ? {
                ...box,
                boxes: box?.boxes?.map((data) =>
                  data?.contentfulId === contentfulId
                    ? {
                        ...data,
                        title,
                        resultOrNodeId,
                        fieldTitle,
                      }
                    : data
                ),
              }
            : box
        );
      }
    },

    handleChangeValueOfResultPageFromEditBox: (state, { payload }) => {
      const newObj = {};
      for (const keys in payload) {
        if (payload[keys] !== undefined) {
          newObj[keys] = payload[keys];
        }
      }
      state.dataSendToEditBox = {
        ...state.dataSendToEditBox,
        ...newObj,
      };

      state.nodeListOfSubcategory = {
        ...state.nodeListOfSubcategory,
        boxes: state.nodeListOfSubcategory?.boxes.map((box) =>
          box?.contentfulId === payload?.contentfulId
            ? {
                ...box,
                ...newObj,
              }
            : box
        ),
      };

      state.data = state.data.map((box) =>
        box?.id === state.nodeListOfSubcategory?.id
          ? {
              ...box,
              boxes: box?.boxes?.map((data) =>
                data?.contentfulId === payload?.contentfulId
                  ? {
                      ...data,
                      ...newObj,
                    }
                  : data
              ),
            }
          : box
      );

      state.data = state.data.map((box) =>
        box?.id === payload?.resultOrNodeIdOld
          ? { ...box, id: payload?.resultOrNodeId }
          : box
      );

      if (state.nodes.length > 0) {
        state.nodes = state.nodes.map((node) =>
          node?.id === state.activeSingleNode?.id
            ? {
                ...node,
                boxes: node?.boxes?.map((data) =>
                  data?.contentfulId === payload?.contentfulId
                    ? {
                        ...data,
                        ...newObj,
                      }
                    : data
                ),
              }
            : node
        );
      }

      if (state.activeSingleNode !== null) {
        state.data = state.data.map((box) =>
          box?.id === state.activeSingleNode?.id
            ? {
                ...box,
                boxes: box?.boxes?.map((data) =>
                  data?.contentfulId === payload?.contentfulId
                    ? {
                        ...data,
                        ...newObj,
                      }
                    : data
                ),
              }
            : box
        );
        state.activeSingleNode = {
          ...state.activeSingleNode,
          boxes: state.activeSingleNode?.boxes.map((box) =>
            box?.contentfulId === payload?.contentfulId
              ? {
                  ...box,
                  ...newObj,
                }
              : box
          ),
        };
      }

      if (state.resultPage !== null) {
        state.resultPage = {
          ...state.resultPage,
          boxes: state.resultPage?.boxes.map((box) =>
            box?.contentfulId === payload?.contentfulId
              ? {
                  ...box,
                  ...newObj,
                }
              : box
          ),
        };
        state.data = state.data.map((box) =>
          box?.id === state.resultPage?.id
            ? {
                ...box,
                boxes: box?.boxes?.map((data) =>
                  data?.contentfulId === payload?.contentfulId
                    ? {
                        ...data,
                        ...newObj,
                      }
                    : data
                ),
              }
            : box
        );
      }

      if (state.resultPageDirectAfterNodeListOfSubcategory !== null) {
        state.resultPageDirectAfterNodeListOfSubcategory = {
          ...state.resultPageDirectAfterNodeListOfSubcategory,
          boxes: state.resultPageDirectAfterNodeListOfSubcategory?.boxes.map(
            (box) =>
              box?.contentfulId === payload?.contentfulId
                ? {
                    ...box,
                    ...newObj,
                  }
                : box
          ),
        };
        state.data = state.data.map((box) =>
          box?.id === state.resultPageDirectAfterNodeListOfSubcategory?.id
            ? {
                ...box,
                boxes: box?.boxes?.map((data) =>
                  data?.contentfulId === payload?.contentfulId
                    ? {
                        ...data,
                        ...newObj,
                      }
                    : data
                ),
              }
            : box
        );
      }
    },

    handleChangeShowExpireSession: (state, { payload }) => {
      state.showExpirePopup = payload;
    },
    handleChangeLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
    },
    handleChangeIsIdleTimerStart: (state, { payload }) => {
      state.isIdleTimerStart = payload;
    },
    handleLogout: (state) => {
      state.loggedIn = false;
      state.isIdleTimerStart = false;
      window.localStorage.setItem("timer", JSON.stringify(0));
      window.location.href=window.location.href.concat("login")
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
  handleChangeOrderOfResultPageDirectAfterSubCategory,
  handleChangeOrderOfResultPage,
  handleChangeValueOfResultPageFromEditBox,
  handleChangeShowExpireSession,
  handleChangeLoggedIn,
  handleChangeIsIdleTimerStart,
  handleLogout,
} = GlobalStates.actions;

export default GlobalStates.reducer;
