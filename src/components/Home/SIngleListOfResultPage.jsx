import React from "react";
import { HiOutlinePencil } from "react-icons/hi";
import {
  handleToggleEditBox,
  handleChangeDataSendToEditbox,
} from "../../redux/GlobalStates";
import { useDispatch, useSelector } from "react-redux";

const SingleListOfResultPage = React.memo(({ box }) => {
  const { showEditBox, data } = useSelector((state) => state.root.globalStates);

  const dispatch = useDispatch();

  return (
    <>
      <div className="w-11/12">
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
          <div className="w-full text-Yellow">
            <span className="text-sm inline-block text-black ml-2">
              ({box?.id})
            </span>{" "}
          </div>
        )}
        {box === null && <span>null</span>}

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
      <HiOutlinePencil
        size={25}
        className="ml-auto cursor-pointer w-1/12"
        onClick={() => {
          if (!showEditBox) {
            dispatch(handleToggleEditBox(true));
          }
          dispatch(handleChangeDataSendToEditbox(box));
        }}
      />
    </>
  );
});

export default SingleListOfResultPage;
