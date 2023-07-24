import React from "react";
import SingleSelectedCategoryList from "./SingleSelectedCategoryList";
import EditBox from "./EditBox";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleEditBox } from "../../redux/GlobalStates";
import SIngleSubSelectedCategoryList from "./SIngleSubSelectedCategoryList";

const ChooseTopicFromSelectedCategoryList = () => {
  const { showEditBox, showSubCategoryList } = useSelector(
    (state) => state.globalStates
  );

  const dispatch = useDispatch();

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
    <div className="w-full flex lg:flex-row flex-col gap-5 items-center justify-center mx-auto">
      <div className="lg:w-1/2 md:w-2/3 w-full md:space-y-5 space-y-4 text-center">
        {showSubCategoryList ? (
          <>
            <SIngleSubSelectedCategoryList
              title="Umgang mit bestehender Dauermedikation"
              list={[
                "Kardiovaskulare",
                "Medikation",
                "Antidiabetika",
                "Gerinnungshemmung",
                "Psychopharmaka",
              ]}
            />
            <SIngleSubSelectedCategoryList
              title="Medikamentose Pramendikation"
              list={[
                "Orale Pramedikation",
                "REktale Pramedikation",
                "Nasale Pramedikation",
              ]}
            />
          </>
        ) : (
          <>
            <SingleSelectedCategoryList title="Quick tools" />
            <SingleSelectedCategoryList title="physiological features" />
            <SingleSelectedCategoryList title="preoperative" />
            <SingleSelectedCategoryList title="emergency" />
            <SingleSelectedCategoryList title="intraoperatively" />
          </>
        )}
        <button
          onClick={() => {
            dispatch(handleToggleEditBox(true));
          }}
          className="yellow_button"
        >
          Add element
        </button>
      </div>
      {showEditBox && (
        <div className="lg:w-1/2 md:w-2/3 w-full">
          <EditBox />
        </div>
      )}
    </div>
  );
};

export default ChooseTopicFromSelectedCategoryList;
