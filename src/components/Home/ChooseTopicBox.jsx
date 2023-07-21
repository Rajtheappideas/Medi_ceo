import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { handleChangeTopic } from "../../redux/GlobalStates";

const ChooseTopicBox = () => {
  const dispatch = useDispatch();
  return (
    <div className="xl:w-1/2 lg:w-2/3 w-full rounded-md p-5 mx-auto shadow-lg flex flex-col items-start justify-center">
      <div className="pb-10 w-full flex items-center justify-between">
        <div className="w-10/12 2xl:text-3xl">
          <p className="font-bold">CHOOSE TOPIC</p>
          <p className="font-semibold">
            And immediately find the right treatment for your patient
          </p>
        </div>
        <p className="cursor-pointer border shadow-md border-Yellow p-2 rounded-md bg-white">
          <AiOutlineSearch size={25} />
        </p>
      </div>
      <div className="w-full grid md:grid-cols-2 md:grid-rows-2 2xl:h-[80vh] h-screen place-items-center 2xl:items-start items-center 2xl:gap-0 gap-5">
        <div
          className="choose_topic_box"
          onClick={() => dispatch(handleChangeTopic("anesthesiology"))}
        >
          <p className="font-semibold 2xl:text-2xl text-lg capitalize">anesthesiology</p>
          <img
            src={require("../../assets/images/anesthesiology.png")}
            alt="anesthesiology"
            className="h-fit md:w-2/3 w-1/3 object-contain object-center"
          />
        </div>
        <div
          className="choose_topic_box"
          onClick={() =>
            dispatch(handleChangeTopic("Perioperative Complications"))
          }
        >
          <p className="font-semibold 2xl:text-2xl text-lg capitalize">Perioperative Complications</p>
          <img
            src={require("../../assets/images/preporactive.png")}
            alt="anesthesiology"
            className="h-fit md:w-2/3 w-1/3 object-contain object-center"
          />
        </div>
        <div
          onClick={() => dispatch(handleChangeTopic("Cardiology"))}
          className="border-[3px] col-span-full bg-white cursor-pointer text-center 2xl:w-6/12 md:w-6/12 w-full 2xl:h-5/6 lg:h-4/5 h-full md:p-4 p-2 rounded-xl border-Yellow flex items-center justify-center md:gap-2 gap-1 flex-col"
        >
          <p className="font-semibold 2xl:text-2xl text-lg capitalize">Cardiology</p>
          <img
            src={require("../../assets/images/cardiology.png")}
            alt="anesthesiology"
            className="h-fit 2xl:w-3/6 md:w-2/3 w-1/3 object-contain object-center"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default ChooseTopicBox;
