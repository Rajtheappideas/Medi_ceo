import React from "react";
import { MdOutlineDragIndicator } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { toast } from "react-hot-toast";

const SingleList = ({ title }) => {
  return (
    <div className="w-full flex select-none items-center cursor-pointer justify-start md:gap-x-3 gap-x-1">
      <MdOutlineDragIndicator size={30} />
      <div className="md:p-4 p-2 w-full shadow-md rounded-md flex items-center md:gap-x-3 gap-x-1">
        <input
          type="radio"
          id={title}
          name="topiclist"
          className="h-5 w-5 cursor-pointer"
        />
        <label
          htmlFor={title}
          className="font-semibold cursor-pointer capitalize tracking-normal"
        >
          {title}
        </label>
        <HiOutlinePencil
          size={25}
          className="ml-auto cursor-pointer"
          onClick={() => {
            toast.remove();
            toast("its pending");
          }}
        />
      </div>
    </div>
  );
};

export default SingleList;
