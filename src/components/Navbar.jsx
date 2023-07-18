import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeCategory, handleChangeTopic } from "../redux/GlobalStates";

const Navbar = ({
  openSidebar,
  setOpenSidebar,
  activeComponent,
  setActiveComponent,
}) => {
  useState(false);

  const { activeTopic, activeCategory } = useSelector(
    (state) => state.globalStates
  );

  const dispatch = useDispatch();

  const handlePreviousChanges = () => {
    if (activeCategory) {
      return dispatch(handleChangeCategory(""));
    } else if (activeTopic) {
      return dispatch(handleChangeTopic(""));
    }
  };

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
        <div className="w-full flex items-center justify-between">
          {/* left side */}
          <div className="flex items-center flex-1 gap-x-2">
            <HiMenuAlt2
              onClick={() => setOpenSidebar(!openSidebar)}
              role="button"
              className="lg:text-2xl text-xl lg:hidden"
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
