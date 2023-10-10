import React, { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeSubCategory,
  handleChangeListName,
  handleChangeMainCategory,
  handleChangeNodeListOfSubcategory,
  handleToggleShowSubCategoryList,
  handleChangeNodes,
  handleChangeResultPage,
  handleToggleEditBox,
  handleChangeUserLanguage,
} from "../redux/GlobalStates";
import { useTranslation } from "react-i18next";

const Navbar = ({
  openSidebar,
  setOpenSidebar,
  activeComponent,
  setActiveComponent,
}) => {
  const [isSticky, setIsSticky] = useState(false);

  const {
    activeMainCategory,
    activeSubCategory,
    nodeListOfSubcategory,
    nodes,
    resultPage,
    resultPageDirectAfterNodeListOfSubcategory,
    activeSingleNode,
    showEditBox,
    userLanguage,
  } = useSelector((state) => state.root.globalStates);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handlePreviousChanges = () => {
    if (showEditBox) dispatch(handleToggleEditBox(false));

    if (
      resultPage !== null ||
      resultPageDirectAfterNodeListOfSubcategory !== null
    ) {
      return dispatch(handleChangeResultPage());
    } else if (nodes.length > 0) {
      return dispatch(handleChangeNodes());
    } else if (nodeListOfSubcategory !== null) {
      return dispatch(handleChangeNodeListOfSubcategory(null));
    } else if (activeSubCategory?.title) {
      return dispatch(handleChangeSubCategory(null));
    } else if (activeMainCategory) {
      return dispatch(handleChangeMainCategory(""));
    }
  };

  const handlechangelanguage = (value) => {
    if (value === "en") {
      window.localStorage.setItem("lang", JSON.stringify("en"));
      dispatch(handleChangeUserLanguage("en"));
      window.location.reload();
    } else {
      window.localStorage.setItem("lang", JSON.stringify("de"));
      dispatch(handleChangeUserLanguage("de"));
      window.location.reload();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      {activeMainCategory === "" && (
        <HiMenuAlt2
          onClick={() => setOpenSidebar(!openSidebar)}
          role="button"
          size={30}
          className="lg:hidden"
        />
      )}

      {/* <select onChange={(e) => handlechangelanguage(e.target.value)}>
        <option value="de">de</option>
        <option value="en">en</option>
      </select> */}
      {activeMainCategory !== "" && (
        <div
          className={`w-full select-none ${
            isSticky && "sticky top-0 shadow-md z-20"
          } lg:p-5 md:p-3 p-2 bg-white flex flex-wrap gap-y-2 items-center`}
        >
          {/* left side */}
          <div className="flex items-center gap-x-2 capitalize w-fit">
            <HiMenuAlt2
              onClick={() => setOpenSidebar(!openSidebar)}
              role="button"
              size={30}
              className="lg:hidden"
            />
            <div
              onClick={() => {
                handlePreviousChanges();
              }}
              className="w-fit cursor-pointer flex items-center gap-x-1 relative font-semibold"
            >
              <BsArrowLeft size={20} className="mr-2" />
            </div>
            <div className="flex flex-col items-start justify-start lg:gap-2 lg:text-xl md:text-base text-sm w-full">
              <div className="flex font-semibold items-center md:gap-x-2 gap-x-1 whitespace-nowrap justify-start text-gray-400 flex-wrap">
                <span>{activeMainCategory}</span>
                {activeSubCategory !== "" && (
                  <>
                    <AiOutlineRight size={15} />
                    <span>{activeSubCategory?.title}</span>
                  </>
                )}
                {nodes.length > 0 &&
                  nodes.map((node) => (
                    <p className=" flex items-center gap-x-1" key={node?.id}>
                      <AiOutlineRight size={15} />
                      <span>{node?.title}</span>
                    </p>
                  ))}
              </div>
              <span className="text-Yellow font-semibold">
                {activeSingleNode === null
                  ? nodeListOfSubcategory?.title
                  : activeSingleNode?.title}
              </span>
            </div>
          </div>

          {/* right side profile */}
          {/* <div
            onClick={() => {
              handlePreviousChanges();
            }}
            className="w-fit cursor-pointer flex items-center gap-x-1 relative font-semibold"
          >
            <BsArrowLeft size={20} /> <span>{t("Previous")}</span>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Navbar;
