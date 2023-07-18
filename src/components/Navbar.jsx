import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import { toast } from "react-hot-toast";
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
      {activeTopic !== "" && (
        <div className="w-full flex items-center justify-between">
          {/* left side */}
          <div className="flex items-center flex-1 gap-x-2">
            <HiMenuAlt2
              onClick={() => setOpenSidebar(!openSidebar)}
              role="button"
              className="md:text-2xl text-xl lg:hidden"
            />
            <div className="flex flex-col items-start justify-start md:gap-3 md:text-xl text-sm">
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
