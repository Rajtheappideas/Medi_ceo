import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import ChooseTopicBox from "../components/Home/ChooseTopicBox";
import ChooseCategoryBox from "../components/Home/ChooseCategoryBox";
import { useSelector } from "react-redux";
import ChooseTopicFromSelectedCategoryList from "../components/Home/ChooseTopicFromSelectedCategoryList";
import ListBox from "../components/Home/ListBox";
import ResultBox from "../components/Home/ResultBox";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("sandbox");
  const [openSidebar, setOpenSidebar] = useState(false);

  const { activeTopic, activeCategory, activeTopicOfCategory, activeListName } =
    useSelector((state) => state.globalStates);

  useEffect(() => {
    if (openSidebar && window.document.body.clientWidth < 1024) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "unset";
    }
  }, [openSidebar]);

  return (
    <>
      <Helmet title={`Medi Ceo`} />
      <div className="w-full flex items-start justify-start lg:gap-3 flex-row h-auto">
        <div
          className={`${openSidebar ? "xl:w-[20%] lg:w-[25%]" : "lg:w-[10%]"}`}
        >
          <Sidebar
            setActiveComponent={setActiveComponent}
            activeComponent={activeComponent}
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
        </div>
        <section
          className={`lg:border-l-2 p-1 h-full space-y-5 min-h-screen ${
            openSidebar ? "xl:w-10/12 lg:w-4/5 w-full" : "lg:max-w-[90%] w-full"
          }`}
        >
          <Navbar
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
          />
          {activeComponent === "sandbox" && (
            <>
              {activeTopic === "" && <ChooseTopicBox />}
              {activeTopic !== "" && activeCategory === "" && (
                <ChooseCategoryBox />
              )}
              {activeCategory !== "" && activeTopicOfCategory === "" && (
                <ChooseTopicFromSelectedCategoryList />
              )}
              {activeTopicOfCategory !== "" && activeListName === "" && (
                <ListBox />
              )}
              {activeTopicOfCategory !== "" && activeListName !== "" && (
                <ResultBox />
              )}
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Home;
