import React, { memo, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  handleToggleEditBox,
  handleClearDataSendToEditbox,
  handleChangeValueOfDataFromEditBox,
} from "../../redux/GlobalStates";
import { useDispatch, useSelector } from "react-redux";
import Editor from "../Editor";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const EditBox = memo(() => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { dataSendToEditBox, data, nodeListOfSubcategory, activeSingleNode } =
    useSelector((state) => state.root.globalStates);

  const dispatch = useDispatch();

  const { fieldTitle, resultOrNodeId, title, contentfulId } =
    dataSendToEditBox !== null && dataSendToEditBox;

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isDirty },
    setValue,
  } = useForm({
    shouldFocusError: true,
    // resolver: yupResolver(signinSchema),
    defaultValues: {
      fieldTitle,
      resultOrNodeId,
      title,
    },
  });

  const onSubmit = (data) => {
    const { fieldTitle, resultOrNodeId, title } = data;
    dispatch(
      handleChangeValueOfDataFromEditBox({
        fieldTitle,
        resultOrNodeId,
        title,
        id: contentfulId,
        resultOrNodeIdOld: dataSendToEditBox?.resultOrNodeId,
      })
    );

    toast.success("Data saved successfully.");
    dispatch(handleToggleEditBox(false));
  };

  useEffect(() => {
    if (dataSendToEditBox === null) {
      reset({
        fieldTitle: "",
        resultOrNodeId: "",
        title: "",
      });
    } else {
      reset({
        fieldTitle,
        resultOrNodeId,
        title,
      });
    }
  }, [dataSendToEditBox]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full relative flex items-start select-none justify-start shadow-md flex-col mx-auto rounded-lg p-4"
    >
      {/* add entry */}
      <div
        className="w-full bg-Yellow z-10 cursor-pointer text-white p-3 rounded-md flex justify-between items-center"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Add Entry
        <IoIosArrowDown
          className={`text-white text-2xl  transition duration-300 ${
            showDropdown ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* add entry dropedown */}
      <div
        className={`w-[95%] absolute top-16 left-1/2 transition select-none -translate-x-1/2 origin-center bg-white shadow-md p-4 h-auto z-10 ${
          showDropdown ? "scale-100" : "scale-0"
        } transition`}
      >
        <label htmlFor="field_title">
          <p className="w-full flex items-center justify-between my-1 cursor-pointer">
            Field Title
            <input type="checkbox" id="field_title" className="" />
          </p>
        </label>
        <label htmlFor="title">
          <p className="w-full flex items-center justify-between my-1 cursor-pointer">
            Title
            <input type="checkbox" id="title" className="" />
          </p>
        </label>
        <label htmlFor="resul_node_id">
          <p className="w-full flex items-center justify-between my-1 cursor-pointer">
            Result Or Node ID
            <input type="checkbox" id="resul_node_id" className="" />
          </p>
        </label>
        <label htmlFor="filtered">
          <p className="w-full flex items-center justify-between my-1 cursor-pointer">
            Filtered
            <input type="checkbox" id="filtered" className="" />
          </p>
        </label>
      </div>
      {/* field title */}
      <div className="my-3 w-full">
        <p className="font-medium ">Field Title</p>
        <input
          type="text"
          className="w-full bg-white border border-1-#EAECF0 rounded-md p-2 outline-none my-1"
          {...register("fieldTitle")}
        />
        <div className="flex justify-between">
          <p className="text-[#475467] text-sm">30 characters</p>
          <p className="text-[#475467] text-sm">Maximum 256 characters</p>
        </div>
      </div>
      {/* editor */}
      <div className="my-3 w-full">
        <label
          htmlFor="message"
          className="block mb-2  font-medium text-gray-90"
        >
          Title
        </label>
        <Editor setValue={setValue} title={getValues().title} />
      </div>
      {/* result node */}
      <div className="my-3 w-full">
        <p className="font-medium ">Result Or Node ID</p>
        <input
          type="text"
          className="w-full bg-white border border-1-#EAECF0 rounded-md p-2 outline-none my-1"
          {...register("resultOrNodeId")}
        />
        <div className="flex justify-between">
          <p className="text-[#475467] text-sm">22 characters</p>
          <p className="text-[#475467] text-sm">Maximum 256 characters</p>
        </div>
      </div>
      {/* filtered */}
      <div className="my-3 w-full">
        <p className="font-medium ">Filtered</p>
        <input
          type="text"
          className="w-full bg-white border border-1-#EAECF0 rounded-md p-2 outline-none my-1"
        />
        <div className="flex justify-between">
          <p className="text-[#475467] text-sm">0 characters</p>
          <p className="text-[#475467] text-sm sm:text-sm">
            Maximum 256 characters
          </p>
        </div>
      </div>
      <hr className="my-3 h-[1px] bg-gray-200 w-full" />
      {/* btns */}
      <div className="flex my-3 ml-auto gap-x-3">
        <button
          type="button"
          onClick={() => {
            dispatch(handleToggleEditBox(false));
            dispatch(handleClearDataSendToEditbox());
          }}
          className=" bg-white text-black text-md rounded-lg common_button"
        >
          Cancel
        </button>
        <button type="submit" className="yellow_button">
          Save Changes
        </button>
      </div>
    </form>
  );
});

export default EditBox;
