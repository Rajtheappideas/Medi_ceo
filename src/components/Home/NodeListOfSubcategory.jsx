import React, { useState } from "react";
import SingleNodeListOfSubCategory from "./SingleNodeListOfSubCategory";
import EditBox from "./EditBox";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleEditBox } from "../../redux/GlobalStates";

const NodeListOfSubcategory = () => {
  const [dataSendToEditBox, setDataSendToEditBox] = useState(null);
  const { showEditBox, nodeListOfSubcategory } = useSelector(
    (state) => state.globalStates
  );

  const dispatch = useDispatch();

  const { boxes, id, title, type } = nodeListOfSubcategory[0] || [];

  return (
    <div className="w-full flex lg:flex-row flex-col gap-5 items-center justify-center mx-auto">
      <div className="lg:w-1/2 md:w-2/3 w-full md:space-y-5 space-y-4 text-center">
        {boxes.length > 0 &&
          boxes.map((box) => (
            <SingleNodeListOfSubCategory
              key={box?.resultOrNodeId}
              setDataSendToEditBox={setDataSendToEditBox}
              data={box}
            />
          ))}
        <button
          onClick={() => {
            dispatch(handleToggleEditBox(true));
          }}
          className="yellow_button"
        >
          Add element
        </button>
      </div>
      {showEditBox && (
        <div className="lg:w-1/2 md:w-2/3 w-full">
          <EditBox data={dataSendToEditBox} />
        </div>
      )}
    </div>
  );
};

export default NodeListOfSubcategory;
