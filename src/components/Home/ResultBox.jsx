import React from "react";
import { useSelector } from "react-redux";
import { FiEdit2 } from "react-icons/fi";
import { BiMessage } from "react-icons/bi";
import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";

const ResultBox = () => {
  const {
    activeMainCategory,
    activeSubCategory,
    activeSingleNode,
    resultPage,
  } = useSelector((state) => state.root.globalStates);

  const { boxes, sources, pageId, id, title, type, path } = resultPage;

  return (
    <div className="xl:w-2/3 md:w-11/12 w-full rounded-md shadow-lg p-5 flex items-start justify-start mx-auto flex-col gap-y-4">
      {/* top div , your result */}
      <div className="w-full flex flex-wrap flex-row justify-between items-start gap-y-3 md:text-base text-sm">
        {/* your result */}
        <div>
          <p className="uppercase text-green-500 font-semibold">Your result</p>
          <p className="text-Yellow font-semibold">
            {activeSubCategory?.title} | {activeSingleNode?.title}
          </p>
          <p className="md:text-2xl text-base capitalize font-bold">{title}</p>
        </div>
        {/* active main category */}
        <p className="md:text-2xl text-base capitalize font-bold">
          {activeMainCategory}
        </p>
        {/* options */}
        <div className="flex items-center gap-x-1 w-auto">
          <p className="md:w-10 md:h-10 w-7 h-7 text-Yellow text-center rounded-full md:p-1.5 p-1 transition border hover:border-2 hover:border-Yellow cursor-pointer">
            <FiEdit2 className="mx-auto md:text-2xl text-base" />
          </p>
          <p className="md:w-10 md:h-10 w-7 h-7 text-black text-center rounded-full md:p-1.5 p-1 transition border hover:border-2 border-black cursor-pointer">
            <BiMessage className="mx-auto md:text-2xl text-base" />
          </p>
          <p className="md:w-10 md:h-10 w-7 h-7 text-blue-600 text-center rounded-full md:p-1.5 p-1 transition border hover:border-2 border-blue-600 cursor-pointer">
            <AiOutlineThunderbolt className="mx-auto md:text-2xl text-base" />
          </p>
          <p className="md:w-10 md:h-10 w-7 h-7 text-red-700 text-center rounded-full md:p-1.5 p-1 transition border hover:border-2 border-red-700 cursor-pointer">
            <IoWarningOutline className="mx-auto md:text-2xl text-base" />
          </p>
        </div>
      </div>
      {boxes !== undefined &&
        boxes.length > 0 &&
        boxes.map((box,index) => (
          <div key={index} className="w-full space-y-2">
            {box?.fieldTitle !== undefined && (
              <div className="w-full text-Yellow ">
                <span>{box?.fieldTitle}</span>
                {/* just for now to check type of box */}
                <span className="text-sm inline-block text-black ml-2">
                  ({box?.id})
                </span>{" "}
              </div>
            )}
            {/* just for now to check type of box */}
            {box?.fieldTitle === undefined && (
              <div className="w-full text-Yellow ">
                <span className="text-sm inline-block text-black ml-2">
                  ({box?.id})
                </span>{" "}
              </div>
            )}

            <div className="w-full flex items-center justify-start p-1 bg-Yellow rounded-2xl">
              <div
                dangerouslySetInnerHTML={{ __html: box?.title }}
                className="bg-Yellow text-black text-center font-semibold w-1/3 rounded-tl-xl rounded-bl-xl"
              ></div>
              <div
                dangerouslySetInnerHTML={{ __html: box?.content }}
                className="bg-black text-gray-300 text-start md:h-12 h-8 w-2/3 p-1 md:p-[9px] rounded-tr-xl rounded-br-xl"
              ></div>
            </div>
          </div>
        ))}
      {/* <div className="w-full text-green-500 p-3 rounded-lg border-2 border-green-500">
        <p dangerouslySetInnerHTML={{ __html: boxes[0]?.title }}></p>
      </div>
      <div className="w-full text-Yellow border-2 border-Yellow rounded-lg h-12 px-2 flex justify-between items-center">
        <div className="w-[85%]">
          <input
            type="text"
            placeholder="Enter Weight"
            className="w-full p-1 pl-5 outline-none focus:border-2 border-black rounded-lg"
          />
        </div>
        <div>
          <span className="border rounded-md border-Yellow p-1.5 font-bold">
            {boxes[1]?.unit}
          </span>{" "}
          / <span></span> icon
        </div>
      </div>
      <div
        className="font-bold text-lg"
        dangerouslySetInnerHTML={{ __html: boxes[2]?.title }}
      ></div> */}
    </div>
  );
};

export default ResultBox;
