import React from "react";
import { MdOutlineDragIndicator } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import { toast } from "react-hot-toast";

const SingleList = ({ title }) => {
  return (
    <div className="w-full flex select-none items-center cursor-pointer justify-start gap-3">
      <MdOutlineDragIndicator size={30} />
      <div className="p-4 w-full shadow-md rounded-md flex items-center gap-3">
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
