import React from "react";
import SingleNodeListOfSubCategory from "./SingleNodeListOfSubCategory";
import EditBox from "./EditBox";
import { useDispatch, useSelector } from "react-redux";
import {
  handleToggleEditBox,
  handleChangeOrderOfNodeListOfSubcategory,
  handleClearDataSendToEditbox,
} from "../../redux/GlobalStates";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const NodeListOfSubcategory = () => {
  const { showEditBox, nodeListOfSubcategory, data } = useSelector(
    (state) => state.root.globalStates
  );

  const dispatch = useDispatch();

  const { boxes, id, title, type } =
    nodeListOfSubcategory !== null && nodeListOfSubcategory;

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

    dispatch(handleChangeOrderOfNodeListOfSubcategory(reorderedItems));
  };

  return (
    <div className="w-full flex lg:flex-row flex-col gap-5 items-center justify-center mx-auto">
      <div className="lg:w-1/2 md:w-2/3 w-full md:space-y-5 space-y-4 text-center">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-full md:space-y-5 space-y-4 text-center"
              >
                {boxes?.length > 0 &&
                  boxes?.map((box, index) => (
                    <SingleNodeListOfSubCategory
                      key={box?.contentfulId}
                      data={box}
                      index={index}
                    />
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button
          onClick={() => {
            if (!showEditBox) {
              dispatch(handleToggleEditBox(true));
            }
            dispatch(handleClearDataSendToEditbox());
          }}
          className="yellow_button"
        >
          Add element
        </button>
      </div>
      {showEditBox && (
        <div className="lg:w-1/2 md:w-2/3 w-full">
          <EditBox />
        </div>
      )}
    </div>
  );
};

export default NodeListOfSubcategory;
