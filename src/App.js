import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallBack";
import Lottie from "lottie-react";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./pages/PrivateRoute";
import jsonData from "./placeholder.json";
import loading from "./assets/animations/loading.json";
import { useIdleTimer } from "react-idle-timer";
import SessionExpirePopup from "./components/SessionExpirePopup";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeShowExpireSession,
  handleChangeIsIdleTimerStart,
} from "./redux/GlobalStates";

const Home = lazy(() => import("./pages/Home"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  // const [remaining, setRemaining] = useState(0);

  const { showExpirePopup, LoggedIn, isIdleTimerStart } = useSelector(
    (state) => state.root.globalStates
  );

  // const dispatch = useDispatch();

  // const onIdle = () => {
  //   dispatch(handleChangeShowExpireSession(true));
  //   dispatch(handleChangeIsIdleTimerStart(false));
  // };

  // var {
  //   start,
  //   pause,
  //   resume,
  //   getRemainingTime,
  //   getLastActiveTime,
  //   getTotalActiveTime,
  //   isIdle,
  //   getElapsedTime,
  // } = useIdleTimer({
  //   onIdle,
  //   startManually: true,
  //   startOnMount: false,
  //   timeout: 10_000,
  //   throttle: 500,
  //   stopOnIdle: true,
  //   events: [],
  // });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRemaining(Math.ceil(getRemainingTime() / 1000));
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (LoggedIn && !showExpirePopup && !isIdleTimerStart) {
  //     start();
  //     dispatch(handleChangeIsIdleTimerStart(true));
  //     console.log("start");
  //   } else if (LoggedIn && !showExpirePopup && isIdleTimerStart) {
  //     resume();
  //     console.log("resume");
  //   }
  //   return () => {
  //     pause();
  //     console.log("pasuse");

  //   };
  // }, []);

  // console.log(
  //   remaining,
  //   isIdle(),
  //   getTotalActiveTime()
  // );

  return (
    <BrowserRouter>
      <Toaster toastOptions={{ duration: 4000 }} position="top-center" />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Suspense
          fallback={
            <div className="relative top-0 left-0 w-screen h-screen">
              <Lottie
                style={{
                  pointerEvents: "none",
                }}
                className="w-80 h-80 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                animationData={loading}
                loop
              />
            </div>
          }
        >
          {showExpirePopup && <SessionExpirePopup />}
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
              caseSensitive
            />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
