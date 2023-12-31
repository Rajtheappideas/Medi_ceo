import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findDataOfNodes,
  handleChangeDataSendToEditbox,
  handleToggleEditBox,
  handleChangeOrderOfActiveSingleNode,
  handleClearDataSendToEditbox,
} from "../../redux/GlobalStates";
import { HiOutlinePencil } from "react-icons/hi";
import EditBox from "./EditBox";
import { MdOutlineDragIndicator } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useTranslation } from "react-i18next";
import { AiOutlinePlusCircle } from "react-icons/ai";

const NodesList = memo(() => {
  const { activeSingleNode, showEditBox, data } = useSelector(
    (state) => state.root.globalStates
  );

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const { boxes, id, title, type } =
    activeSingleNode !== null && activeSingleNode;

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const reorderedItems = reorder(
      boxes,
      result.source.index,
      result.destination.index
    );

    dispatch(handleChangeOrderOfActiveSingleNode(reorderedItems));
  };

  return (
    <>
      <div className="w-full transition-all no_scrollbar lg:max-h-[80vh] max-h-[150vh] overflow-y-scroll overflow-x-hidden flex lg:flex-row flex-col gap-5 lg:items-start lg:justify-start items-center justify-center mx-auto">
        <div
          className={`${
            showEditBox ? "lg:w-1/2 md:w-2/3 w-full" : "w-full"
          }  md:space-y-5 space-y-4 text-center mx-auto lg:max-h-[80vh] max-h-[150vh] overflow-y-scroll overflow-x-hidden scrollbar`}
        >
          {" "}
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="w-full md:space-y-5 space-y-4 text-center"
                >
                  {boxes !== undefined &&
                    boxes.length > 0 &&
                    boxes.map((box, index) => (
                      <Draggable
                        draggableId={box?.contentfulId}
                        key={box?.contentfulId}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="w-full flex select-none items-center cursor-pointer justify-start md:gap-x-3 gap-x-1"
                          >
                            <MdOutlineDragIndicator
                              size={30}
                              className="cursor-grab active:cursor-grabbing"
                            />
                            <div className="md:p-4 p-2 w-full cursor-pointer font-semibold border rounded-md flex items-center justify-start md:gap-x-3 gap-x-1">
                              <label
                                htmlFor={box?.resultOrNodeId}
                                className="font-semibold cursor-pointer capitalize tracking-normal w-full text-left gap-x-2 flex items-center"
                                onClick={() => {
                                  dispatch(
                                    findDataOfNodes(box?.resultOrNodeId)
                                  );
                                  if (showEditBox) {
                                    dispatch(handleToggleEditBox(false));
                                  }
                                }}
                              >
                                {box?.id === "multipleChoiceActionBox" && (
                                  <input
                                    type="checkbox"
                                    className="h-5 w-5 cursor-pointer"
                                  />
                                )}
                                {box?.id !== "multipleChoiceActionBox" && (
                                  <input
                                    type="radio"
                                    name="topiclist"
                                    className="h-5 w-5 cursor-pointer"
                                  />
                                )}
                                {box?.fieldTitle !== undefined && (
                                  <span>{box?.fieldTitle}</span>
                                )}
                                {box?.title !== undefined &&
                                  box?.fieldTitle === undefined && (
                                    <span>{box?.title}</span>
                                  )}
                                <span className="text-sm">
                                  ({box?.resultOrNodeId})
                                </span>
                              </label>

                              <HiOutlinePencil
                                size={25}
                                className="ml-auto cursor-pointer"
                                onClick={() => {
                                  if (!showEditBox) {
                                    dispatch(handleToggleEditBox(true));
                                  }
                                  dispatch(handleChangeDataSendToEditbox(box));
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <button
            onClick={() => {
              dispatch(handleToggleEditBox(true));
              dispatch(handleClearDataSendToEditbox());
            }}
            className="yellow_button xl:w-1/3"
          >
            <AiOutlinePlusCircle size={25} className="inline-block mr-2" />

            {t("Add element")}
          </button>
        </div>
        {showEditBox && (
        <hr className="lg:w-[1px] w-[99vw] h-[0.5px] lg:min-h-[80vh] lg:max-h-[80vh] bg-black " />
        )}
        <EditBox from="nodeList" />
      </div>
    </>
  );
});

export default NodesList;
