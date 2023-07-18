import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { handleChangeCategory } from "../../redux/GlobalStates";

const ChooseCategoryBox = () => {
  const dispatch = useDispatch();

  return (
    <div className="lg:w-1/2 w-full rounded-md bg-gray-50 p-5 mx-auto shadow-md flex flex-col items-start justify-center">
      <div className="pb-10 w-full flex items-center justify-between">
        <div className="w-10/12">
          <p className="font-bold uppercase">CHOOSE category</p>
          <p className="font-semibold">
            And immediately find the right treatment for your patient
          </p>
        </div>
        <p className="cursor-pointer border shadow-md border-Yellow p-2 rounded-md bg-white">
          <AiOutlineSearch size={25} />
        </p>
      </div>
      <div className="w-full grid md:grid-cols-2 place-items-center items-center gap-5">
        <div
          className="choose_topic_box"
          onClick={() => dispatch(handleChangeCategory("Kinder"))}
        >
          <p className="font-semibold text-lg">Kinder</p>
          <img
            src={require("../../assets/images/child.png")}
            className="md:w-32 w-20 md:h-32 h-20"
          />
        </div>
        <div
          className="choose_topic_box"
          onClick={() => dispatch(handleChangeCategory("Adult"))}
        >
          <p className="font-semibold text-lg">Adult</p>
          <img
            src={require("../../assets/images/couple.png")}
            className="md:w-32 w-20 md:h-32 h-20"
          />{" "}
        </div>
        <div
          className="choose_topic_box"
          onClick={() =>
            dispatch(handleChangeCategory("pre-existing conditions"))
          }
        >
          <p className="font-semibold text-lg">pre-existing conditions</p>
          <img
            src={require("../../assets/images/disease.png")}
            className="md:w-32 w-20 md:h-32 h-20"
          />{" "}
        </div>
        <div
          className="choose_topic_box"
          onClick={() =>
            dispatch(handleChangeCategory("Anesthesia of special disciplines"))
          }
        >
          <p className="font-semibold text-lg">
            Anesthesia of special disciplines{" "}
          </p>
          <img
            src={require("../../assets/images/alphabet.png")}
            className="md:w-32 w-20 md:h-32 h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseCategoryBox;
