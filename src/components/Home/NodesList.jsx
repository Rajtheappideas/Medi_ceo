import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findDataOfNodes } from "../../redux/GlobalStates";

const NodesList = memo(() => {
  const { activeSingleNode } = useSelector((state) => state.globalStates);

  const dispatch = useDispatch();

  const { boxes, id, title, type } =
    activeSingleNode !== null && activeSingleNode;
  // console.log(boxes);

  return (
    <div className="lg:w-1/2 md:w-2/3 w-full mx-auto md:space-y-5 space-y-4 text-center">
      {boxes !== undefined &&
        boxes.length > 0 &&
        boxes.map((box) => (
          <label
            key={box?.contentfulId}
            className="md:p-4 p-2 cursor-pointer w-full font-semibold shadow-md rounded-md flex items-center justify-start md:gap-x-3 gap-x-1"
            onClick={() => {
              dispatch(findDataOfNodes(box?.resultOrNodeId));
            }}
          >
            {box?.fieldTitle !== undefined && <span>{box?.fieldTitle}</span>}
            {box?.title !== undefined && box?.fieldTitle === undefined && (
              <span>{box?.title}</span>
            )}
            <span className="text-sm">({box?.id})</span>

            {box?.id === "multipleChoiceActionBox" && (
              <input
                type="checkbox"
                className="h-5 w-5 cursor-pointer ml-auto"
              />
            )}
            {box?.id !== "multipleChoiceActionBox" && (
              <input
                type="radio"
                name="topiclist"
                className="h-5 w-5 cursor-pointer ml-auto"
              />
            )}
          </label>
        ))}
    </div>
  );
});

export default NodesList;
