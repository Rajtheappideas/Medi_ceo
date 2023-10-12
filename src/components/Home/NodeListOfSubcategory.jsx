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
import { useTranslation } from "react-i18next";
import { AiOutlinePlusCircle } from "react-icons/ai";

const NodeListOfSubcategory = () => {
  const { showEditBox, nodeListOfSubcategory } = useSelector(
    (state) => state.root.globalStates
  );

  const dispatch = useDispatch();

  const { t } = useTranslation();

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
    <div className="w-full transition-all no_scrollbar lg:max-h-[80vh] max-h-[150vh] overflow-y-scroll overflow-x-hidden flex lg:flex-row flex-col gap-5 lg:items-start lg:justify-start items-center justify-center mx-auto">
      <div
        className={`${
          showEditBox ? "lg:w-1/2 md:w-2/3 w-full" : "w-full"
        }  md:space-y-5 space-y-4 text-center mx-auto lg:max-h-[80vh] max-h-[150vh] overflow-y-scroll overflow-x-hidden scrollbar`}
      >
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
          className="yellow_button xl:w-1/3"
        >
          <AiOutlinePlusCircle size={25} className="inline-block mr-2" />
          {t("Add element")}
        </button>
      </div>
      {showEditBox && (
        <hr className="lg:w-[1px] w-[99vw] h-[0.5px] lg:min-h-[80vh] lg:max-h-[80vh] bg-black " />
      )}
      <EditBox from="nodeListOfSubcategory" />
    </div>
  );
};

export default NodeListOfSubcategory;
