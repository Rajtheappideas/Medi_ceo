import React, { memo, useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillCopy } from "react-icons/ai";
import {
  handleToggleEditBox,
  handleClearDataSendToEditbox,
  handleChangeValueOfResultPageFromEditBox,
  handleChangeValueOfDataFromEditBox,
} from "../../redux/GlobalStates";
import { useDispatch, useSelector } from "react-redux";
import Editor from "../Editor";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const EditBox = ({ from }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { dataSendToEditBox, showEditBox } = useSelector(
    (state) => state.root.globalStates
  );

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const {
    fieldTitle,
    resultOrNodeId,
    title,
    contentfulId,
    expandableContent,
    resultId,
    content,
    color,
    id,
  } = dataSendToEditBox !== null && dataSendToEditBox;

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    control,
    watch,
    formState: { errors, isDirty },
    setValue,
  } = useForm({
    shouldFocusError: true,
    // resolver: yupResolver(signinSchema),
    defaultValues: {
      fieldTitle,
      resultOrNodeId: resultOrNodeId ?? resultOrNodeId,
      title,
      content,
      expandableContent,
      resultId,
      color,
      id,
    },
  });

  const onSubmit = (data) => {
    const {
      fieldTitle,
      resultOrNodeId,
      title,
      expandableContent,
      resultId,
      content,
      color,
      id,
    } = data;

    if (!isDirty) {
      return dispatch(handleToggleEditBox(false));
    } else {
      if (from === "resultPage") {
        dispatch(
          handleChangeValueOfResultPageFromEditBox({
            fieldTitle,
            resultOrNodeId,
            title,
            contentfulId,
            resultOrNodeIdOld: dataSendToEditBox?.resultOrNodeId,
            expandableContent,
            resultId,
            content,
            color,
            id,
          })
        );
      } else {
        dispatch(
          handleChangeValueOfDataFromEditBox({
            fieldTitle,
            resultOrNodeId,
            title,
            contentfulId,
            resultOrNodeIdOld: dataSendToEditBox?.resultOrNodeId,
          })
        );
      }

      toast.success("Data saved successfully.");
      dispatch(handleToggleEditBox(false));
    }
  };

  useEffect(() => {
    if (dataSendToEditBox === null) {
      reset({
        fieldTitle: "",
        resultOrNodeId: "",
        title: "",
        expandableContent: "",
        resultId: "",
        content: "",
      });
    } else {
      reset({
        fieldTitle,
        resultOrNodeId: resultOrNodeId ?? resultOrNodeId,
        title,
        expandableContent,
        resultId,
        content,
      });
    }
    return () => {
      setValue("title", "", { shouldDirty: false });
    };
  }, [dataSendToEditBox]);

  async function copyContent() {
    try {
      toast.remove();
      await navigator.clipboard.writeText(contentfulId);
      toast.success("contentfulId copied");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`scrollbar ${
        showEditBox
          ? "translate-x-0 p-4 mx-auto w-full lg:w-1/2 md:w-2/3 max-h-screen overflow-y-scroll"
          : "scale-0 w-0 h-0"
      } relative flex border items-start select-none transition duration-300 ease-in-out justify-start flex-col rounded-lg`}
    >
      {/* add entry */}
      <div
        className="w-full bg-Yellow z-10 cursor-pointer text-white p-3 rounded-md flex justify-between items-center"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {t("Add Entry")}
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
            {t("Field Title")}
            <input type="checkbox" id="field_title" className="" />
          </p>
        </label>
        <label htmlFor="title">
          <p className="w-full flex items-center justify-between my-1 cursor-pointer">
            {t("Title")}
            <input type="checkbox" id="title" className="" />
          </p>
        </label>
        <label htmlFor="resul_node_id">
          <p className="w-full flex items-center justify-between my-1 cursor-pointer">
            {t("Result Or Node ID")}
            <input type="checkbox" id="resul_node_id" className="" />
          </p>
        </label>
        <label htmlFor="filtered">
          <p className="w-full flex items-center justify-between my-1 cursor-pointer">
            {t("Filtered")}
            <input type="checkbox" id="filtered" className="" />
          </p>
        </label>
      </div>
      {/* field title */}
      {fieldTitle !== undefined && (
        <div className="my-3 w-full">
          <p className="font-medium ">{t("Field Title")}</p>
          <input
            type="text"
            className="w-full bg-white border rounded-md p-2 outline-none my-1"
            {...register("fieldTitle")}
          />
          <div className="flex justify-between">
            <p className="text-[#475467] text-sm">{t("30 characters")}</p>
            <p className="text-[#475467] text-sm">
              {t("Maximum 256 characters")}
            </p>
          </div>
        </div>
      )}
      {/* id */}
      {id !== undefined && (
        <div className="my-3 w-full">
          <p className="font-medium ">{t("ID")}</p>
          <input
            type="text"
            className="w-full bg-white border rounded-md p-2 outline-none my-1"
            {...register("id")}
          />
          <div className="flex justify-between">
            <p className="text-[#475467] text-sm">{t("30 characters")}</p>
            <p className="text-[#475467] text-sm">
              {t("Maximum 256 characters")}
            </p>
          </div>
        </div>
      )}
      {/* title */}
      <div className="my-3 w-full">
        <label htmlFor="title" className="block mb-2  font-medium text-gray-90">
          Title
        </label>
        <Editor name="title" control={control} setValue={setValue} />
      </div>
      {/* expandableContent */}
      {expandableContent !== undefined && (
        <div className="my-3 w-full">
          <label
            htmlFor="expandableContent"
            className="block mb-2  font-medium text-gray-90"
          >
            {t("Expandable Content")}
          </label>
          <Editor
            name="expandableContent"
            control={control}
            setValue={setValue}
          />
        </div>
      )}
      {/* content */}
      {content !== undefined && (
        <div className="my-3 w-full">
          <label
            htmlFor="expandableContent"
            className="block mb-2  font-medium text-gray-90"
          >
            {t("Content")}
          </label>
          <Editor name="content" control={control} setValue={setValue} />
        </div>
      )}
      {/* result node */}
      {resultOrNodeId !== undefined && (
        <div className="my-3 w-full">
          <p className="font-medium ">{t("Result Or Node ID")}</p>
          <Controller
            control={control}
            name="resultOrNodeId"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <input
                type="text"
                className="w-full bg-white border rounded-md p-2 outline-none my-1"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <div className="flex justify-between">
            <p className="text-[#475467] text-sm">{t("22 characters")}</p>
            <p className="text-[#475467] text-sm">
              {t("Maximum 256 characters")}
            </p>
          </div>
        </div>
      )}
      {/* filtered */}
      <div className="my-3 w-full">
        <p className="font-medium ">{t("Filtered")}</p>
        <input
          type="text"
          className="w-full bg-white border rounded-md p-2 outline-none my-1"
        />
        <div className="flex justify-between">
          <p className="text-[#475467] text-sm">{t("0 characters")}</p>
          <p className="text-[#475467] text-sm sm:text-sm">
            {t("Maximum 256 characters")}
          </p>
        </div>
      </div>
      {/* result id */}
      {resultId !== undefined && (
        <div className="my-3 w-full">
          <p className="font-medium ">{t("Result ID")}</p>
          <input
            type="text"
            className="w-full bg-white border rounded-md p-2 outline-none my-1"
            {...register("resultId")}
          />
          <div className="flex justify-between">
            <p className="text-[#475467] text-sm">{t("0 characters")}</p>
            <p className="text-[#475467] text-sm sm:text-sm">
              {t("Maximum 256 characters")}
            </p>
          </div>
        </div>
      )}
      {/* color */}
      {color !== undefined && (
        <div className="my-3 w-full">
          <p className="font-medium ">{t("Color")}</p>
          <input
            type="text"
            className="w-full bg-white border rounded-md p-2 outline-none my-1"
            {...register("color")}
          />
          <div className="flex justify-between">
            <p className="text-[#475467] text-sm">{t("0 characters")}</p>
            <p className="text-[#475467] text-sm sm:text-sm">
              {t("Maximum 256 characters")}
            </p>
          </div>
        </div>
      )}
      {/* content full id */}
      {contentfulId && (
        <div className="my-3 w-full">
          <p className="font-medium ">{t("Content full Id")}</p>
          <p className="w-full bg-gray-100 rounded-md p-2 outline-none my-1">
            {contentfulId}
            <AiFillCopy
              onClick={() => copyContent()}
              className="float-right text-xl cursor-pointer"
            />
          </p>
        </div>
      )}
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
          {t("Cancel")}
        </button>
        <button
          type={isDirty ? "submit" : "button"}
          className={`${!isDirty ? "yellow_button_disable" : "yellow_button"} `}
        >
          {t("Save Changes")}
        </button>
      </div>
    </form>
  );
};

export default memo(EditBox);
