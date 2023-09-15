import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import MainCategoryBox from "../components/Home/MainCategoryBox";
import SubCategoryBox from "../components/Home/SubCategoryBox";
import NodeListOfSubcategory from "../components/Home/NodeListOfSubcategory";
import NodesList from "../components/Home/NodesList";
import ResultBox from "../components/Home/ResultBox";
import ResultBoxDirectAfterNodeListOfSubcategory from "../components/Home/ResultBoxDirectAfterNodeListOfSubcategory";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeShowExpireSession,
  handleChangeIsIdleTimerStart,
  handleChangeLoggedIn,
} from "../redux/GlobalStates";
import { useIdleTimer } from "react-idle-timer";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("sandbox");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [timeout, setTimeout] = useState(
    JSON.parse(window.localStorage.getItem("timer")) * 1000
  );

  const {
    activeMainCategory,
    activeSubCategory,
    nodeListOfSubcategory,
    nodes,
    resultPage,
    resultPageDirectAfterNodeListOfSubcategory,
    showExpirePopup,
    loggedIn,
    isIdleTimerStart,
  } = useSelector((state) => state.root.globalStates);

  useEffect(() => {
    if (openSidebar && window.document.body.clientWidth < 1024) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "unset";
    }
  }, [openSidebar]);

  const dispatch = useDispatch();

  let interval;

  const onIdle = () => {
    clearInterval(interval);

    dispatch(handleChangeShowExpireSession(true));
    dispatch(handleChangeIsIdleTimerStart(false));
    dispatch(handleChangeLoggedIn(false));
  };

  var { start, getRemainingTime, isIdle } = useIdleTimer({
    onIdle,
    startManually: true,
    startOnMount: false,
    timeout: timeout !== null && timeout !== 0 ? timeout : 60000,
    throttle: 500,
    stopOnIdle: true,
    events: [],
  });

  // for timer
  useEffect(() => {
    if (!isIdle()) {
      if (loggedIn && !showExpirePopup && !isIdleTimerStart) {
        interval = setInterval(() => {
          window.localStorage.setItem(
            "timer",
            JSON.stringify(Math.ceil(getRemainingTime() / 1000))
          );
        }, 1000);
      } else if (loggedIn && !showExpirePopup && isIdleTimerStart) {
        start();
        interval = setInterval(() => {
          window.localStorage.setItem(
            "timer",
            JSON.stringify(Math.ceil(getRemainingTime() / 1000))
          );
        }, 1000);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  // when user enter first time after login
  useEffect(() => {
    if (loggedIn && !showExpirePopup && !isIdleTimerStart) {
      start();
      dispatch(handleChangeIsIdleTimerStart(true));
    }
  }, []);

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
          className={`p-1 h-full space-y-5 min-h-screen ${
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
              {activeMainCategory !== "" && nodeListOfSubcategory === null && (
                <SubCategoryBox />
              )}

              {/* nodelist of subcategory */}
              {activeSubCategory !== null &&
                nodeListOfSubcategory !== null &&
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
