import React from "react";
import { ImSearch } from "react-icons/im";
import { useDispatch } from "react-redux";
import { handleChangeMainCategory } from "../../redux/GlobalStates";
import { useTranslation } from "react-i18next";

const MainCategoryBox = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <div className="xl:w-1/2 lg:w-2/3 w-11/12 md:max-h-screen rounded-md p-5 mx-auto lg:shadow-none shadow-lg flex flex-col items-start justify-center">
      <div className="pb-5 w-full flex items-center justify-between">
        <div className="w-10/12 2xl:text-2xl">
          <p className="font-bold uppercase">{t("choose topic")}</p>
          <p className="font-semibold 2xl:text-xl">
            {t("And immediately find the right treatment for your patient")}
          </p>
        </div>
        <p className="cursor-pointer border shadow-md border-Yellow p-2 rounded-md bg-white">
          <ImSearch  color="black" className="md:text-2xl text-xl" />
        </p>
      </div>
      <div className="w-full grid md:grid-cols-2 md:grid-rows-2 md:max-h-[75vh] place-items-center 2xl:items-start items-center 2xl:gap-0 gap-5">
        <div
          className="choose_topic_box"
          onClick={() => dispatch(handleChangeMainCategory("anesthesiology"))}
        >
          <p className="font-semibold 2xl:text-2xl text-lg capitalize">
            {t("anesthesiology")}
          </p>
          <img
            src={require("../../assets/images/anesthesiology.png")}
            alt="anesthesiology"
            className="h-fit md:w-32 w-20 object-contain object-center"
          />
        </div>
        <div
          className="choose_topic_box"
          onClick={() =>
            dispatch(handleChangeMainCategory("Perioperative Complications"))
          }
        >
          <p className="font-semibold 2xl:text-2xl text-lg capitalize">
            {t("perioperative complications")}
          </p>
          <img
            src={require("../../assets/images/preporactive.png")}
            alt="anesthesiology"
            className="h-fit md:w-32 w-20 object-contain object-center"
          />
        </div>
        <div
          onClick={() => dispatch(handleChangeMainCategory("Cardiology"))}
          className="border-[3px] col-span-full bg-white cursor-pointer text-center md:w-1/2 w-full h-full md:p-4 p-2 rounded-xl border-Yellow flex items-center justify-center md:gap-2 gap-1 flex-col"
        >
          <p className="font-semibold 2xl:text-2xl text-lg capitalize">
            {t("Cardiology")}
          </p>
          <img
            src={require("../../assets/images/cardiology.png")}
            alt="anesthesiology"
            className="h-fit md:w-32 w-20 object-contain object-center"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default MainCategoryBox;
