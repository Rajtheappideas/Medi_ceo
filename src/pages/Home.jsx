import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import ChooseTopicBox from "../components/Home/ChooseTopicBox";
import ChooseCategoryBox from "../components/Home/ChooseCategoryBox";
import { useSelector } from "react-redux";
import ListsBox from "../components/Home/ListsBox";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [openSidebar, setOpenSidebar] = useState(false);

  const { activeTopic, activeCategory } = useSelector(
    (state) => state.globalStates
  );

  useEffect(() => {
    if (openSidebar) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "unset";
    }
  }, [openSidebar]);

  return (
    <>
      <Helmet title={`Medi Ceo`} />
      <div className="w-full flex items-start justify-start lg:gap-3 flex-row h-auto">
        <Sidebar
          setActiveComponent={setActiveComponent}
          activeComponent={activeComponent}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <section
          className={`lg:border-l lg:p-5 md:p-3 p-2 h-full space-y-5 min-h-screen ${
            openSidebar ? "xl:w-10/12 lg:w-4/5 w-full" : "lg:w-[90%] w-full"
          }`}
        >
          <Navbar
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
          />
          {activeTopic === "" && <ChooseTopicBox />}
          {activeTopic !== "" && activeCategory === "" && <ChooseCategoryBox />}
          {activeCategory !== "" && <ListsBox />}
        </section>
      </div>
    </>
  );
};

export default Home;
