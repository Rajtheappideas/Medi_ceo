import React from "react";
import JoditEditor from "jodit-react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const SourceBox = () => {
  return (
    <div className="w-full border border-gray-300 rounded-lg md:p-5 p-3 h-auto md:space-y-5 space-y-3 text-left">
      {/* source id */}
      <div className="w-full">
        <label className="font-medium ">Source ID</label>
        <input
          type="text"
          className="w-full border-gray-300 border rounded-md p-2 outline-none my-1"
        />
        <div className="flex justify-between">
          <p className="text-[#475467] text-sm">30 characters</p>
          <p className="text-[#475467] text-sm">Maximum 256 characters</p>
        </div>
      </div>
      {/* sources */}
      <div>
        <label className="font-medium">Sources</label>
        <JoditEditor
          //   ref={editor}
          value="placeholder..."
          //   config={config}
          tabIndex={1}
          //     onBlur={onBlur}
          //     onChange={onChange}
          className=""
        />
      </div>
      {/* filters */}
      <div className="w-full">
        <label className="font-medium">Filters</label>
        <input
          type="text"
          className="w-full border-gray-300 border rounded-md p-2 outline-none my-1"
        />
        <div className="flex justify-between">
          <p className="text-[#475467] text-sm">22 characters</p>
          <p className="text-[#475467] text-sm">Maximum 256 characters</p>
        </div>
      </div>
      {/* internal title */}
      <div>
        <label className="font-medium">Internal title</label>
        <JoditEditor
          //   ref={editor}
          value="placeholder..."
          //   config={config}
          tabIndex={1}
          //     onBlur={onBlur}
          //     onChange={onChange}
          className=""
        />
      </div>
      {/* is quick help */}
      <div className="w-full">
        <label className="font-medium">IsQuick Help</label>
        <input
          type="text"
          className="w-full border-gray-300 border rounded-md p-2 outline-none my-1"
        />
        <div className="flex justify-start items-center gap-x-3">
          <div className="flex items-center gap-x-1">
            <input type="radio" name="quick_help" id="yes" />
            <label htmlFor="yes">
              <span>Yes</span>
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="flex items-center gap-x-1">
              <input type="radio" name="quick_help" id="no" />
              <label htmlFor="no">
                <span>No</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* new filter add */}
      <div className="w-full ">
        <label className="font-medium">New Filters</label>
        <div className="bg-gray-50 w-full flex items-center justify-center p-4 rounded-lg border border-gray-200">
          <div
            role="button"
            className="bg-white p-2 rounded-lg border border-gray-300 flex items-center gap-x-2"
          >
            <AiOutlinePlusCircle size={30} color="gray" />
            <p>Add Content</p>
          </div>
        </div>
      </div>
      <hr />
      {/* btns */}
      <div className="flex my-3 w-full justify-end gap-x-3">
        <button
          type="button"
        
          className=" bg-white text-black text-md rounded-lg common_button"
        >
          Cancel
        </button>
        <button type="submit" className="yellow_button">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SourceBox;
