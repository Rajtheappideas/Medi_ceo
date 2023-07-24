import React from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { MdOutlineDragIndicator } from "react-icons/md";
import { useDispatch } from "react-redux";
import { handleToggleEditBox } from "../../redux/GlobalStates";

const SIngleSubSelectedCategoryList = ({ title, list }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex select-none items-center cursor-pointer justify-start md:gap-x-3 gap-x-1">
      <MdOutlineDragIndicator size={30} />
      <div className="md:p-4 p-2 w-full shadow-md rounded-md flex flex-col items-start md:gap-x-3 gap-x-1">
        <div className="w-full rounded-md flex items-center md:gap-x-3 gap-x-1">
          <input
            type="radio"
            id={title}
            name="topiclist"
            className="h-6 w-6 cursor-pointer"
            //   onClick={() => dispatch(handleChangeTopicOfCategory(title))}
          />
          <label
            htmlFor={title}
            className="font-semibold cursor-pointer capitalize tracking-normal w-full text-left"
        //       onClick={() => dispatch(handleChangeTopicOfCategory(title))}
          >
            {title}
          </label>
          <HiOutlinePencil
            size={25}
            className="ml-auto cursor-pointer"
            onClick={() => {
              dispatch(handleToggleEditBox(true));
            }}
          />
        </div>

        <ul className="text-gray-400 list-disc text-left md:p-4 p-2">
          {list.map((item) => (
            <li key={item} className="">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SIngleSubSelectedCategoryList;
