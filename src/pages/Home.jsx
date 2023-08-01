import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import MainCategoryBox from "../components/Home/MainCategoryBox";
import SubCategoryBox from "../components/Home/SubCategoryBox";
import { useSelector } from "react-redux";
import NodeListOfSubcategory from "../components/Home/NodeListOfSubcategory";
import NodesList from "../components/Home/NodesList";
import ResultBox from "../components/Home/ResultBox";
import ResultBoxDirectAfterNodeListOfSubcategory from "../components/Home/ResultBoxDirectAfterNodeListOfSubcategory";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("sandbox");
  const [openSidebar, setOpenSidebar] = useState(false);

  const {
    activeMainCategory,
    activeSubCategory,
    nodeListOfSubcategory,
    nodes,
    resultPage,
    resultPageDirectAfterNodeListOfSubcategory,
  } = useSelector((state) => state.globalStates);

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
              {/* main category component */}
              {activeMainCategory === "" && activeSubCategory === null && (
                <MainCategoryBox />
              )}

              {/* subcategory box */}
              {activeMainCategory !== "" &&
                nodeListOfSubcategory.length === 0 && <SubCategoryBox />}

              {/* nodelist of subcategory */}
              {activeSubCategory !== null &&
                nodeListOfSubcategory.length > 0 &&
                nodes.length === 0 &&
                resultPageDirectAfterNodeListOfSubcategory === null && (
                  <NodeListOfSubcategory />
                )}

              {/* nodelist */}
              {nodes &&
                nodes.length > 0 &&
                resultPage === null &&
                resultPageDirectAfterNodeListOfSubcategory === null && (
                  <NodesList />
                )}

              {/* result box */}
              {nodes &&
                nodes.length > 0 &&
                resultPage !== null &&
                resultPageDirectAfterNodeListOfSubcategory === null && (
                  <ResultBox />
                )}

              {/* result box right after the node list of subcategory */}
              {nodes.length === 0 &&
                resultPage === null &&
                resultPageDirectAfterNodeListOfSubcategory !== null && (
                  <ResultBoxDirectAfterNodeListOfSubcategory />
                )}
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Home;
