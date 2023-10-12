import React from "react";
import { useDispatch } from "react-redux";
import { handleChangeMainCategory } from "../../redux/GlobalStates";
import { useTranslation } from "react-i18next";

const MainCategoryBox = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <div className="xl:w-1/2 lg:w-2/3 w-11/12 space-y-3 md:max-h-screen md:min-h-screen rounded-md p-5 mx-auto lg:shadow-none shadow-lg flex flex-col items-start justify-start">
      <div className="w-full 2xl:text-2xl">
        <p className="font-bold uppercase">{t("choose topic")}</p>
        <p className="font-semibold 2xl:text-xl">
          {t("And immediately find the right treatment for your patient")}
        </p>
      </div>
      {/* search bar */}
      <div className="w-full 2xl:text-2xl">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-Yellow focus:border-[3px]"
          placeholder="Search..."
        />
      </div>
      <div className="w-full grid md:grid-cols-2 md:grid-rows-2 md:max-h-[70vh] md:min-h-[70vh] place-items-center 2xl:items-start items-center gap-5">
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
            className="h-fit w-1/2 object-contain object-center"
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
            alt="perioperative complications"
            className="h-fit w-1/2 object-contain object-center"
          />
        </div>
        <div
          className="border-[3px] bg-white cursor-pointer text-center md:w-1/2 h-full md:aspect-square md:p-4 p-2 rounded-xl border-Yellow flex items-center justify-center md:gap-2 gap-1 flex-col col-span-full"
          onClick={() => dispatch(handleChangeMainCategory("Cardiology"))}
        >
          <p className="font-semibold 2xl:text-2xl text-lg capitalize">
            {t("Cardiology")}
          </p>
          <img
            src={require("../../assets/images/cardiology.png")}
            alt="Cardiology"
            className="h-fit w-1/2 object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default MainCategoryBox;
