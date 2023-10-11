import React, { useRef } from "react";
import { MdOutlineDragIndicator } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
  handleToggleEditBox,
  findDataOfNodes,
  handleChangeDataSendToEditbox,
} from "../../redux/GlobalStates";
import { Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SingleNodeListOfSubCategory = React.memo(({ data, index }) => {
  const { showEditBox } = useSelector((state) => state.root.globalStates);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <>
      <Draggable draggableId={data?.resultOrNodeId} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="w-full flex select-none items-center cursor-pointer justify-start md:gap-x-3 gap-x-1"
          >
            <MdOutlineDragIndicator
              size={30}
              className="cursor-grab active:cursor-grabbing min-w-[2rem]"
            />
            <div className="md:p-4 p-2 w-full border rounded-md flex items-center justify-start md:gap-x-3 gap-x-1">
              <label
                htmlFor={data?.resultOrNodeId}
                className="font-semibold cursor-pointer capitalize tracking-normal w-full text-left gap-x-2 flex items-center"
                onClick={() => {
                  dispatch(findDataOfNodes(data?.resultOrNodeId));
                  if (showEditBox) {
                    dispatch(handleToggleEditBox(false));
                  }
                }}
              >
                <input
                  type="radio"
                  name="topiclist"
                  className="md:h-5 md:w-5 h-3 w-3 cursor-pointer"
                  readOnly={true}
                />
                <span className="truncate xl:max-w-[10rem] md:max-w-[3rem] max-w-[1rem] text-xs md:text-base">
                  {data?.fieldTitle}
                </span>
                <span className="text-xs md:text-base">
                  ({data?.resultOrNodeId})
                </span>
              </label>
              <HiOutlinePencil
                size={25}
                className="ml-auto cursor-pointer"
                onClick={() => {
                  if (!showEditBox) {
                    dispatch(handleToggleEditBox(true));
                  }
                  dispatch(handleChangeDataSendToEditbox(data));
                }}
              />
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
});

export default SingleNodeListOfSubCategory;
