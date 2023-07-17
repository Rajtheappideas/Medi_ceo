import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallBack";
import Lottie from "lottie-react";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const PageNotFound = lazy(() => import("./pages/PageNotFound"));

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
              {/* <Lottie
                style={{
                  pointerEvents: "none",
                  height: "300px",
                  width: "300px",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-full"
                animationData={loading}
                loop
              /> */}
              Loading...
            </div>
          }
        >
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

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
