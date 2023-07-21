import React from "react";
import SingleSelectedCategoryList from "./SingleSelectedCategoryList";

const ChooseTopicFromSelectedCategoryList = () => {
  const data = [
    {
      boxes: [
        {
          fieldTitle: "Emergency",
          title: "<p>Emergency</p>",
          resultOrNodeId: "1b5XgyRX7dRT3eZWfjgkqb",
          contentfulId: "2mvTkB8lXneX8NNTs16LKO",
          id: "furtherResultPageBox",
        },
      ],
      id: "1xzLPVyiVIpDQdMZ8Ur7Q5",
      title: "Children",
    },
    {
      boxes: [
        {
          fieldTitle: "Anaphylaxis",
          title: "<p>Anaphylaxis</p>",
          resultOrNodeId: "3MfcTQKmKt59g0f6OIy88f",
          contentfulId: "3jfpVIpqhn8RSkwE988Xic",
          id: "furtherResultPageBox",
        },
      ],
      id: "1b5XgyRX7dRT3eZWfjgkqb",
      title: "Emergency medication",
    },
  ];

  // console.log(data);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center mx-auto">
      <div className="lg:w-1/2 md:w-2/3 w-full md:space-y-5 space-y-4 text-center">
        <SingleSelectedCategoryList title="Quick tools" />
        <SingleSelectedCategoryList title="physiological features" />
        <SingleSelectedCategoryList title="preoperative" />
        <SingleSelectedCategoryList title="emergency" />
        <SingleSelectedCategoryList title="intraoperatively" />

        <button className="yellow_button">Add element</button>
      </div>
    </div>
  );
};

export default ChooseTopicFromSelectedCategoryList;
