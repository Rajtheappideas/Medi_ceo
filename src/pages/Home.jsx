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
import { handleChangeShowExpireSession } from "../redux/GlobalStates";
import {
  handleChangeIsIdleTimerStart,
  handleChangeLoggedIn,
  handleChangeUser,
} from "../redux/AuthSlice";
import { useIdleTimer } from "react-idle-timer";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("content list");
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
  } = useSelector((state) => state.root.globalStates);

  const { loggedIn, isIdleTimerStart } = useSelector(
    (state) => state.root.auth
  );

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
    dispatch(handleChangeUser());
  };

  var { start, getRemainingTime, isIdle } = useIdleTimer({
    onIdle,
    startManually: true,
    startOnMount: false,
    timeout: timeout !== null && timeout !== 0 ? timeout : 3_00_000,
    throttle: 500,
    stopOnIdle: true,
    events: [
      "mousemove",
      "keydown",
      "wheel",
      "DOMMouseScroll",
      "mousewheel",
      "mousedown",
      "touchstart",
      "touchmove",
      "MSPointerDown",
      "MSPointerMove",
      "visibilitychange",
      "focus",
    ],
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
  }, [loggedIn, showExpirePopup, isIdleTimerStart]);

  // when user enter first time after login
  useEffect(() => {
    if (loggedIn && !showExpirePopup && !isIdleTimerStart) {
      start();
      dispatch(handleChangeIsIdleTimerStart(true));
    }
  }, [loggedIn, showExpirePopup, isIdleTimerStart]);

  return (
    <>
      <Helmet title={`Medi Ceo`} />
      <div className="w-full bg-white flex items-start justify-start lg:gap-3 flex-row h-auto">
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
          className={`p-1 overflow-x-hidden space-y-3 min-h-screen ${
            openSidebar ? "xl:w-10/12 lg:w-4/5 w-full" : "lg:max-w-[90%] w-full"
          }`}
        >
          <Navbar
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
          />
          {activeComponent === "content list" && (
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
