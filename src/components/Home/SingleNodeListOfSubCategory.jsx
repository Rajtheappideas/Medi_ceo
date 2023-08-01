import React from "react";
import { MdOutlineDragIndicator } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { handleToggleEditBox, findDataOfNodes } from "../../redux/GlobalStates";

const SingleNodeListOfSubCategory = React.memo(
  ({ data, setDataSendToEditBox }) => {
    const dispatch = useDispatch();

    return (
      <div className="w-full flex select-none items-center cursor-pointer justify-start md:gap-x-3 gap-x-1">
        <MdOutlineDragIndicator
          size={30}
          className="cursor-grab active:cursor-grabbing"
        />
        <div className="md:p-4 p-2 w-full shadow-md rounded-md flex items-center justify-start md:gap-x-3 gap-x-1">
          <label
            htmlFor={data?.resultOrNodeId}
            className="font-semibold cursor-pointer capitalize tracking-normal w-full text-left gap-x-2 flex items-center"
            onClick={() => {
              // dispatch(findDataOfNodes("3MfcTQKmKt59g0f6OIy88f"));
              dispatch(findDataOfNodes(data?.resultOrNodeId));
            }}
          >
            <input
              type="radio"
              name="topiclist"
              className="h-5 w-5 cursor-pointer"
            />
            <span>{data?.fieldTitle}</span>
          </label>
          <HiOutlinePencil
            size={25}
            className="ml-auto cursor-pointer"
            onClick={() => {
              dispatch(handleToggleEditBox(true));
              setDataSendToEditBox(data);
            }}
          />
        </div>
      </div>
    );
  }
);

export default SingleNodeListOfSubCategory;
