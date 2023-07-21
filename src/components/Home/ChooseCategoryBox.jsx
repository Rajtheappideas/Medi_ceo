import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { handleChangeCategory } from "../../redux/GlobalStates";

const ChooseCategoryBox = () => {
  const dispatch = useDispatch();

  return (
    <div className="xl:w-1/2 md:w-10/12 w-full rounded-md p-5 mx-auto shadow-xl flex flex-col items-start justify-center">
      <div className="pb-10 w-full flex items-center justify-between">
        <div className="w-10/12 2xl:text-3xl text-base">
          <p className="font-bold uppercase">CHOOSE category</p>
          <p className="font-semibold">
            And immediately find the right treatment for your patient
          </p>
        </div>
        <p className="cursor-pointer border shadow-md border-Yellow p-2 rounded-md bg-white">
          <AiOutlineSearch size={25} />
        </p>
      </div>
      <div className="w-full grid md:grid-cols-2 md:grid-rows-2 min-h-screen place-items-center 2xl:items-start items-center 2xl:gap-0 gap-5">
        <div
          className="choose_category_box"
          onClick={() => dispatch(handleChangeCategory("Kinder"))}
        >
          <p className="font-semibold text-lg 2xl:text-2xl capitalize">Kinder</p>
          <img
            src={require("../../assets/images/child.png")}
            className="h-fit md:w-2/3 w-1/3 object-contain object-center"
          />
        </div>
        <div
          className="choose_category_box"
          onClick={() => dispatch(handleChangeCategory("Adult"))}
        >
          <p className="font-semibold text-lg 2xl:text-2xl capitalize">Adult</p>
          <img
            src={require("../../assets/images/couple.png")}
            className="h-fit md:w-2/3 w-1/3 object-contain object-center"
          />{" "}
        </div>
        <div
          className="choose_category_box"
          onClick={() =>
            dispatch(handleChangeCategory("pre-existing conditions"))
          }
        >
          <p className="font-semibold text-lg 2xl:text-2xl capitalize">pre-existing conditions</p>
          <img
            src={require("../../assets/images/disease.png")}
            className="h-fit md:w-2/3 w-1/3 object-contain object-center"
          />{" "}
        </div>
        <div
          className="choose_category_box"
          onClick={() =>
            dispatch(handleChangeCategory("Anesthesia of special disciplines"))
          }
        >
          <p className="font-semibold text-lg 2xl:text-2xl capitalize">
            Anesthesia of special disciplines{" "}
          </p>
          <img
            src={require("../../assets/images/alphabet.png")}
            className="h-fit md:w-2/3 w-1/3 object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseCategoryBox;
