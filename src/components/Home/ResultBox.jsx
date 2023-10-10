import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { handleChangeOrderOfResultPage } from "../../redux/GlobalStates";
import SingleListOfResultPage from "./SIngleListOfResultPage";
import EditBox from "./EditBox";
import SourceBox from "./SourceBox";
import { useTranslation } from "react-i18next";

const ResultBox = () => {
  const {
    activeMainCategory,
    activeSubCategory,
    activeSingleNode,
    resultPage,
    showEditBox,
  } = useSelector((state) => state.root.globalStates);

  const { boxes, sources, pageId, id, title, type, path } = resultPage;

  const dispatch = useDispatch();

  const { t } = useTranslation();

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

    dispatch(handleChangeOrderOfResultPage(reorderedItems));
  };

  return (
    <div className=" w-full no_scrollbar lg:max-h-[80vh] max-h-[150vh] overflow-y-scroll overflow-x-hidden flex items-start justify-start lg:p-5 p-3 mx-auto xl:flex-row flex-col gap-5">
      <div
        className={`${
          showEditBox ? "xl:w-[60%] md:w-10/12" : "w-full"
        }  text-center lg:p-5 p-3 lg:space-y-5 md:space-y-3 space-y-2 mx-auto scrollbar lg:max-h-[80vh] max-h-[150vh] overflow-y-scroll overflow-x-hidden rounded-md shadow-lg`}
      >
        {/* top div , your result */}
        <div className="w-full flex flex-wrap md:flex-row flex-col md:justify-between justify-start items-start md:gap-3 gap-1 ">
          {/* your result */}
          <div className="text-left">
            <p className="uppercase text-green-500 font-semibold">
              {t("Your result")}
            </p>
            <p className="text-Yellow font-semibold">
              {activeSubCategory?.title} | {activeSingleNode?.title}
            </p>
            <p className="xl:text-2xl md:text-base text-sm capitalize font-bold">
              {title}
            </p>
          </div>
          {/* active main category */}
          {/* <p className="xl:text-2xl md:text-base text-sm capitalize font-bold">
            {activeMainCategory}
          </p> */}
          {/* options */}
          {/* <div className="flex items-center gap-x-1 w-auto">
            <p className="md:w-10 md:h-10 w-7 h-7 text-black text-center rounded-full md:p-1.5 p-1 transition border hover:border-2 border-black cursor-pointer">
              <BiMessage className="mx-auto md:text-2xl text-base" />
            </p>
            <p className="md:w-10 md:h-10 w-7 h-7 text-blue-600 text-center rounded-full md:p-1.5 p-1 transition border hover:border-2 border-blue-600 cursor-pointer">
              <AiOutlineThunderbolt className="mx-auto md:text-2xl text-base" />
            </p>
            <p className="md:w-10 md:h-10 w-7 h-7 text-red-700 text-center rounded-full md:p-1.5 p-1 transition border hover:border-2 border-red-700 cursor-pointer">
              <IoWarningOutline className="mx-auto md:text-2xl text-base" />
            </p>
          </div> */}
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-full md:space-y-5 space-y-4 text-left"
              >
                {boxes !== undefined &&
                  boxes.length > 0 &&
                  boxes.map((box, index) => (
                    <Draggable
                      draggableId={box?.contentfulId ?? index.toString()}
                      key={box?.contentfulId ?? index.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="w-full space-y-2 flex items-center gap-x-2"
                        >
                          <SingleListOfResultPage box={box} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button className="yellow_button">{t("Add element")}</button>
        {/* source box */}
        <SourceBox />
      </div>{" "}
      {showEditBox && (
        <hr className="lg:w-[0.1px] w-[99vw] h-[0.5px] lg:h-[80vh] bg-black " />
      )}
      <EditBox from="resultPage" />
    </div>
  );
};

export default ResultBox;
