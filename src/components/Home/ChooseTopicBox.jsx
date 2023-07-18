import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { GiLoveInjection } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { handleChangeTopic } from "../../redux/GlobalStates";

const ChooseTopicBox = () => {
  const dispatch = useDispatch();
  return (
    <div className="xl:w-1/2 lg:w-2/3 w-full rounded-md bg-gray-50 p-5 mx-auto shadow-md flex flex-col items-start justify-center">
      <div className="pb-10 w-full flex items-center justify-between">
        <div className="w-10/12">
          <p className="font-bold">CHOOSE TOPIC</p>
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
          onClick={() => dispatch(handleChangeTopic("anesthesiology"))}
        >
          <p className="font-semibold text-lg">anesthesiology</p>
          <GiLoveInjection className="rotate-90 md:w-32 w-20 md:h-32 h-20" />
        </div>
        <div
          className="choose_topic_box"
          onClick={() =>
            dispatch(handleChangeTopic("Perioperative Complications"))
          }
        >
          <p className="font-semibold text-lg">Perioperative Complications</p>
          <p>image</p>
        </div>
        <div
          onClick={() => dispatch(handleChangeTopic("Cardiology"))}
          className="border-[3px] bg-white cursor-pointer col-span-full text-center md:w-1/2 w-full md:h-48 h-40 md:p-4 p-2 rounded-lg border-Yellow flex items-center justify-start flex-col md:gap- gap-35"
        >
          <p className="font-semibold text-lg">Cardiology</p>
          <BsFillHeartPulseFill className="md:w-32 w-20 md:h-32 h-20" />
        </div>
      </div>
    </div>
  );
};

export default ChooseTopicBox;
