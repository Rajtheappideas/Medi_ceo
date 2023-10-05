import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallBack";
import Lottie from "lottie-react";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./pages/PrivateRoute";
import loading from "./assets/animations/loading.json";
import SessionExpirePopup from "./components/SessionExpirePopup";
import { useDispatch, useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const { showExpirePopup } = useSelector((state) => state.root.globalStates);
  const dispatch = useDispatch();

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
