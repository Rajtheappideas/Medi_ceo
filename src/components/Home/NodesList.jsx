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

const NodesList = memo(() => {
  const { activeSingleNode, showEditBox, data } = useSelector(
    (state) => state.root.globalStates
  );

  const dispatch = useDispatch();

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
      <div className="w-full flex lg:flex-row flex-col gap-5 items-center justify-center mx-auto pb-10">
        <div className="lg:w-1/2 md:w-2/3 w-full mx-auto md:space-y-5 space-y-4 text-center">
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
                            <div className="md:p-4 p-2 w-full cursor-pointer font-semibold shadow-md rounded-md flex items-center justify-start md:gap-x-3 gap-x-1">
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
            className="yellow_button"
          >
            Add element
          </button>
        </div>
        {showEditBox && (
          <div className="lg:w-1/2 md:w-2/3 w-full">
            <EditBox from="nodeList" />
          </div>
        )}
      </div>
    </>
  );
});

export default NodesList;
