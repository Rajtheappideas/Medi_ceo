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
} from "../redux/GlobalStates";

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
  } = useSelector((state) => state.root.globalStates);

  const dispatch = useDispatch();

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
          className="lg:text-2xl text-xl lg:hidden"
        />
      )}
      {activeMainCategory !== "" && (
        <div
          className={`w-full select-none ${
            isSticky && "sticky top-0 shadow-md z-50"
          } lg:p-5 md:p-3 p-2 bg-white flex flex-wrap gap-y-2 items-center md:justify-between justify-end`}
        >
          {/* left side */}
          <div className="flex items-start gap-x-2 capitalize w-fit">
            <HiMenuAlt2
              onClick={() => setOpenSidebar(!openSidebar)}
              role="button"
              className="text-2xl lg:hidden"
            />
            <div className="flex flex-col items-start justify-start lg:gap-3 lg:text-xl md:text-base text-sm w-full">
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
          <div
            onClick={() => {
              handlePreviousChanges();
            }}
            className="w-fit cursor-pointer flex items-center gap-x-1 relative font-semibold"
          >
            <BsArrowLeft size={20} /> <span>Previous</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
