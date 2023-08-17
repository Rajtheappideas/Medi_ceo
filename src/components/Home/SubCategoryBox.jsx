import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  findDataReleatedSubcategory,
  handleChangeSubCategory,
} from "../../redux/GlobalStates";
import children from "../../assets/images/child.png";
import adult from "../../assets/images/couple.png";
import disease from "../../assets/images/disease.png";
import alphabet from "../../assets/images/alphabet.png";
import ecg from "../../assets/images/ECG_tool.png";
import anticogulant from "../../assets/images/anticogulant.png";
import generally from "../../assets/images/generally.png";
import specific from "../../assets/images/specific.png";

const SubCategoryBox = () => {
  const [subcategory, setSubcategory] = useState([]);

  const { activeMainCategory, activeSubCategory, data } = useSelector(
    (state) => state.root.globalStates
  );

  const dispatch = useDispatch();

  const subCategories = [
    {
      subcategories: [
        { id: "1xzLPVyiVIpDQdMZ8Ur7Q5", title: "children", image: children },
        { id: "6AG1ZhXOFg8RcZsjyakZ7V", title: "adult", image: adult },
        {
          id: "1TB45MsNqCaMMEL7VFAMIS",
          title: "pre-existing conditions",
          image: disease,
        },
        {
          id: "2XFXbZjnskSDJ70Irb3ybr",
          title: "anesthesia of special disciplines",
          image: alphabet,
        },
      ],
      title: "anesthesiology",
    },
    {
      subcategories: [
        {
          id: "jcVdKsbPBk2s9N71RyLGD",
          title: "anticogulant",
          image: anticogulant,
        },
        { id: "4178gGF3MLAzbmN7wNQwFN", title: "ecg tool", image: ecg },
      ],
      title: "Cardiology",
    },
    {
      subcategories: [
        { id: "5YBu7FGTYCZck1Yi4EN0MU", title: "generally", image: generally },
        { id: "3GxEY7b9U2e0erapaxzHkR", title: "specific", image: specific },
      ],
      title: "Perioperative Complications",
    },
  ];

  useEffect(() => {
    const findSubCategory = subCategories.filter(
      (subcategory) => subcategory.title === activeMainCategory
    );
    setSubcategory(findSubCategory[0]?.subcategories);
  }, [activeMainCategory]);

  // const handleFindNodePageOfSubCategoy = (topic) => {
  //   if (topic === "children") {
  //     findDataReleatedSubcategory("1xzLPVyiVIpDQdMZ8Ur7Q5");
  //     return "1xzLPVyiVIpDQdMZ8Ur7Q5";
  //   } else if (topic === "adult") {
  //     return "6AG1ZhXOFg8RcZsjyakZ7V";
  //   } else if (topic === "pre-existing conditions") {
  //     return "1TB45MsNqCaMMEL7VFAMIS";
  //   } else if (topic === "anesthesia of special disciplines") {
  //     return "2XFXbZjnskSDJ70Irb3ybr";
  //   } else if (topic === "generally") {
  //     return "5YBu7FGTYCZck1Yi4EN0MU";
  //   } else if (topic === "specific") {
  //     return "3GxEY7b9U2e0erapaxzHkR";
  //   } else if (topic === "anticogulant") {
  //     return "jcVdKsbPBk2s9N71RyLGD";
  //   } else if (topic === "ecg tool") {
  //     return "4178gGF3MLAzbmN7wNQwFN";
  //   } else if (topic === "Grundlagen") {
  //     return "3TWBvbePw5FJst47ed0mdI";
  //   } else if (topic === "Krankheitsbilder") return "1Gx25eApF20iIC3m4YDHDX";
  // };

  return (
    <div className="xl:w-1/2 md:w-10/12 w-full rounded-md p-5 mx-auto shadow-xl flex flex-col items-start justify-center">
      <div className="pb-10 w-full flex items-center justify-between">
        <div className="w-10/12 2xl:text-2xl text-base">
          <p className="font-bold uppercase">CHOOSE category</p>
          <p className="font-semibold 2xl:text-xl">
            And immediately find the right treatment for your patient
          </p>
        </div>
        <p className="cursor-pointer border shadow-md border-Yellow p-2 rounded-md bg-white">
          <AiOutlineSearch size={25} />
        </p>
      </div>
      <div className="w-full grid md:grid-cols-2 md:grid-rows-2 min-h-screen place-items-center 2xl:items-start items-center 2xl:gap-0 gap-5">
        {subcategory.length > 0 ? (
          subcategory.map((category) => (
            <div
              key={category.id}
              className="choose_category_box"
              onClick={() => {
                dispatch(
                  handleChangeSubCategory({
                    title: category?.title,
                    id: category?.id,
                  })
                );
                dispatch(findDataReleatedSubcategory());
              }}
            >
              <p className="font-semibold text-lg 2xl:text-2xl capitalize">
                {category?.title}
              </p>
              <img
                src={category?.image}
                className="h-fit md:w-2/3 w-1/3 object-contain object-center"
                alt={category?.title}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center font-semibold">
            Found Nothing releated this category
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCategoryBox;
