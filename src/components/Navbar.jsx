import React, { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeCategory,
  handleChangeListName,
  handleChangeTopic,
  handleChangeTopicOfCategory,
} from "../redux/GlobalStates";

const Navbar = ({
  openSidebar,
  setOpenSidebar,
  activeComponent,
  setActiveComponent,
}) => {
  const [isSticky, setIsSticky] = useState(false);

  const { activeTopic, activeCategory, activeTopicOfCategory, activeListName } =
    useSelector((state) => state.globalStates);

  const dispatch = useDispatch();

  const handlePreviousChanges = () => {
    if (activeListName) {
      return dispatch(handleChangeListName(""));
    } else if (activeTopicOfCategory) {
      return dispatch(handleChangeTopicOfCategory(""));
    } else if (activeCategory) {
      return dispatch(handleChangeCategory(""));
    } else if (activeTopic) {
      return dispatch(handleChangeTopic(""));
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
      {activeTopic === "" && (
        <HiMenuAlt2
          onClick={() => setOpenSidebar(!openSidebar)}
          role="button"
          className="lg:text-2xl text-xl lg:hidden"
        />
      )}
      {activeTopic !== "" && (
        <div
          className={`w-full ${
            isSticky && "sticky top-0 shadow-md"
          } lg:p-5 md:p-3 p-2 bg-white flex flex-wrap gap-y-2 items-center justify-between`}
        >
          {/* left side */}
          <div className="flex items-center flex-1 gap-x-2">
            <HiMenuAlt2
              onClick={() => setOpenSidebar(!openSidebar)}
              role="button"
              className="text-2xl lg:hidden"
            />
            <div className="flex flex-col items-start justify-start lg:gap-3 lg:text-xl md:text-base text-sm">
              <div className="flex items-center md:gap-x-2 gap-x-1 justify-start text-gray-400">
                <p>{activeTopic}</p>
                {activeCategory !== "" && (
                  <>
                    <AiOutlineRight size={15} />
                    <p className="font-semibold">{activeCategory}</p>
                  </>
                )}
              </div>
              <p className="text-Yellow font-semibold">Allgemeinanästhesie</p>
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
