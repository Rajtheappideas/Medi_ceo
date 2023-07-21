import React from "react";
import { useDispatch } from "react-redux";
import { handleChangeListName } from "../../redux/GlobalStates";

const SingleList = ({ title }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex select-none items-center cursor-pointer justify-start md:gap-x-3 gap-x-1">
      <div
        onClick={() => dispatch(handleChangeListName(title))}
        className="md:p-4 p-2 w-full shadow-md rounded-md flex items-center md:gap-x-3 gap-x-1"
      >
        <label
          htmlFor={title}
          className="font-semibold cursor-pointer capitalize tracking-normal"
        >
          {title}
        </label>
        <input
          type="radio"
          id={title}
          name="topiclist"
          className="h-5 w-5 cursor-pointer ml-auto"
        />
      </div>
    </div>
  );
};

export default SingleList;
