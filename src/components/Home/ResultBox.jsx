import React from "react";
import { useSelector } from "react-redux";
import { FiEdit2 } from "react-icons/fi";
import { BiMessage } from "react-icons/bi";
import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";

const ResultBox = () => {
  const { activeTopicOfCategory, activeCategory, activeListName } = useSelector(
    (state) => state.globalStates
  );

  const data = {
    page: {
      boxes: [
        {
          fieldTitle: "All stadiums",
          title:
            "<p>All stages</p><ul><li><p>Stop antigen delivery!</p></li></ul><p></p>",
          contentfulId: "11Ws3KdS8lFJzu7Lt9ypOv",
          id: "actionRecommendationBox",
        },
        {
          title: "Enter weight",
          unit: "Kg",
          contentfulId: "23zCiAf2S14fSucpKdKCc3",
          id: "calculatorBox",
        },
        {
          title: "For mild courses (stage I & II)",
          color: "gold",
          contentfulId: "6JsifqacM0fRQ5wXk1hOkb",
          id: "textBox",
        },
        {
          fieldTitle: "Clemastine",
          title: "<p>Clemastine{_source1}</p>",
          content: "<p>0.03 mg/kg bw i.v.</p>",
          contentfulId: "6UA81AThp2HBPsmMoUJPMq",
          id: "dosingRecommendationBox",
        },
        {
          title: "Stage II & III",
          color: "gold",
          contentfulId: "eWWQ5hRoAoEnc0M4cFzUL",
          id: "textBox",
        },
        {
          fieldTitle: "Adrenalin i.m.",
          title: "<p>Adrenaline{_source1,2}\n</p>",
          content: "<p>150-500 μg i.m.</p>",
          contentfulId: "ut2mN4wfY3UpxdRqBENmt",
          id: "dosingRecommendationBox",
        },
        {
          fieldTitle: "Adrenalin i.v.",
          title: "<p>Adrenaline{_source1,2}</p>",
          content: "<p>1 μg/kg bw i.v.</p>",
          contentfulId: "3DlOhebCFK1AhiJ4JVFzoX",
          id: "dosingRecommendationBox",
        },
        {
          fieldTitle: "Oxygen administration",
          title: "<p>Oxygen{_source1,2}</p>",
          content: "<p>High flow &gt;10 l/min and FiO₂ 1.0 </p>",
          contentfulId: "1xBcIIYeQhYbc3PjktO4VA",
          id: "dosingRecommendationBox",
        },
        {
          fieldTitle: "Volume output",
          title: "<p>Volume gift{_source1,2}</p>",
          content: "<p>20 ml/kg bw balanced whole electrolyte solution</p>.",
          contentfulId: "10Q3Mq52T9wq2goh6b70iN",
          id: "dosingRecommendationBox",
        },
        {
          fieldTitle: "Methylprednisolone",
          title: "<p>Methylprednisolone{_source1}</p>",
          content: "<p>1-2 mg/kg bw i.v.</p>",
          contentfulId: "2s8w2tH7lhD0MurREG83S7",
          id: "dosingRecommendationBox",
        },
      ],
      sources:
        '<p><a href="https://www.ai-online.info/images/ai-ausgabe/2015/03-2015/2015_3_126-134_Allergie%20und%20Anaphylaxie%20in%20der%20Kinderanaesthesie.pdf">1. 2015, AI, Review, Allergie und Anaphylaxie in der Kinderanästhesie</a></p><p><a href="https://register.awmf.org/assets/guidelines/061-025l_S2k_Akuttherapie-Management-Anaphylaxie_2021-10.pdf">2. 2021, AWMF, S2k-Leitlinie, Akuttherapie undManagement der Anaphylaxie</a></p>',
      pageId: "KA_NM_ANA",
      id: "3MfcTQKmKt59g0f6OIy88f",
      title: "Anaphylaxis",
    },
    path: ["Anesthesiology", "Children", "Emergency medication"],
  };

  const {
    page: { boxes },
  } = data;

  return (
    <div className="xl:w-2/3 md:w-11/12 w-full rounded-md shadow-lg p-5 flex items-start justify-start mx-auto flex-col gap-y-4">
      <div className="w-full flex flex-wrap flex-row justify-between items-start gap-y-3 md:text-base text-sm">
        <div>
          <p className="uppercase text-green-500 font-semibold">Your result</p>
          <p className="text-Yellow font-semibold">
            {activeCategory} | {activeTopicOfCategory}
          </p>
          <p className="md:text-2xl text-base capitalize font-bold">
            {activeListName}
          </p>
        </div>
        <div className="flex items-center gap-x-1 w-auto">
          <p className="md:w-10 md:h-10 w-7 h-7 text-Yellow text-center rounded-full md:p-1.5 p-1 transition border hover:border-2 border-Yellow cursor-pointer">
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
      <div className="w-full text-green-500 p-3 rounded-lg border-2 border-green-500">
        <p dangerouslySetInnerHTML={{ __html: boxes[0]?.title }}></p>
        {/* <p>All Stages</p> */}
        {/* <li>Stop antigen supply!</li> */}
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
      ></div>
      <div className="w-full flex items-center justify-start p-1 bg-Yellow rounded-2xl">
        <div
          dangerouslySetInnerHTML={{ __html: boxes[3]?.fieldTitle }}
          className="bg-Yellow text-black text-center font-semibold w-1/3 rounded-tl-xl rounded-bl-xl"
        >
          {/* Clemastin */}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: boxes[3]?.content }}
          className="bg-black text-gray-300 text-start w-2/3 md:p-[9px] p-1 rounded-tr-xl rounded-br-xl"
        >
          {/* 0,03 mg/kg KG i.v. */}
        </div>
      </div>
      <div
        className="font-bold text-lg"
        dangerouslySetInnerHTML={{ __html: boxes[4]?.title }}
      >
        {/* Stadium 2 & 3 */}
      </div>
      <div className="w-full flex items-center justify-start p-1 bg-Yellow rounded-2xl">
        <div
          dangerouslySetInnerHTML={{ __html: boxes[5]?.fieldTitle }}
          className="bg-Yellow text-black text-center font-semibold w-1/3 rounded-tl-xl rounded-bl-xl"
        >
          {/* Adrenalin */}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: boxes[5]?.content }}
          className="bg-black text-gray-300 text-start w-2/3 md:p-[9px] p-1 rounded-tr-xl rounded-br-xl"
        >
          {/* 150-500 mg i.m. */}
        </div>
      </div>
      <div className="w-full flex items-center justify-start p-1 bg-Yellow rounded-2xl">
        <div
          dangerouslySetInnerHTML={{ __html: boxes[6]?.fieldTitle }}
          className="bg-Yellow text-black text-center font-semibold w-1/3 rounded-tl-xl rounded-bl-xl"
        >
          {/* Adrenalin */}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: boxes[6]?.content }}
          className="bg-black text-gray-300 text-start w-2/3 md:p-[9px] p-1 rounded-tr-xl rounded-br-xl"
        >
          {/* 1 mg/kg KG i.v. */}
        </div>
      </div>
      <div className="w-full flex items-center justify-start p-1 bg-Yellow rounded-2xl">
        <div
          dangerouslySetInnerHTML={{ __html: boxes[7]?.fieldTitle }}
          className="bg-Yellow text-black text-center font-semibold w-1/3 rounded-tl-xl rounded-bl-xl"
        >
          {/* Oxgen */}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: boxes[7]?.content }}
          className="bg-black text-gray-300 text-start w-2/3 md:p-[9px] p-1 rounded-tr-xl rounded-br-xl"
        >
          {/* high flow &gt; 1/min and FiO<sub>2</sub> 1.0 */}
        </div>
      </div>
      <div className="w-full flex items-center justify-start p-1 bg-Yellow rounded-2xl">
        <div
          dangerouslySetInnerHTML={{ __html: boxes[8]?.fieldTitle }}
          className="bg-Yellow text-black text-center font-semibold w-1/3 rounded-tl-xl rounded-bl-xl"
        >
          {/* Volume addition */}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: boxes[8]?.content }}
          className="bg-black text-gray-300 text-start w-2/3 md:p-[9px] p-1 rounded-tr-xl rounded-br-xl"
        >
          {/* 20 ml/kg body weight balanced full electrolyte solution */}
        </div>
      </div>
      <div className="w-full flex items-center justify-start p-1 bg-Yellow rounded-2xl">
        <div
          dangerouslySetInnerHTML={{ __html: boxes[9]?.fieldTitle }}
          className="bg-Yellow text-black text-center font-semibold w-1/3 rounded-tl-xl rounded-bl-xl"
        >
          {/* Methylprednisolone */}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: boxes[9]?.content }}
          className="bg-black text-gray-300 text-start w-2/3 md:p-[9px] p-1 rounded-tr-xl rounded-br-xl"
        >
          {/* 1-2 ml/kg KG i.v.{" "} */}
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
