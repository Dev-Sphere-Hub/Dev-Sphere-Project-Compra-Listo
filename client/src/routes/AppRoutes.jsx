import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import LandingPage from "@/pages/LandingPage/LandingPage";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Home from "@/pages/Home";
import ListPage from "@/pages/ListPage";
import GeneratedListPage from "@/pages/GeneratedList";
import NavBar from "@/layouts/NavBar";
import GoBack from "@/layouts/GoBack";
import PublicNav from "@/layouts/PublicNav";
import Footer from "@/layouts/Footer";
import LoadingSpinner from "@/components/LoadingSpinner";

const AppRoutes = ({ setIsAuthenticated, isAuthenticated }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PublicNav />
                  <LandingPage
                    setIsAuthenticated={setIsAuthenticated}
                    isAuthenticated={isAuthenticated}
                  />
                  <Footer />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <GoBack />
                  <Login   setIsAuthenticated={setIsAuthenticated}
                    isAuthenticated={isAuthenticated}/>
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <GoBack />
                  <Register />
                  <Footer />
                </>
              }
            />
            <Route
              path="/home"
              element={
                <>
                  <NavBar />
                  <GoBack />
                  <Home />
                </>
              }
            />
            <Route
              path="/create"
              element={
                <>
                  <NavBar />
                  <GoBack />
                  <ListPage />
                </>
              }
            />
            <Route
              path="/create/:id"
              element={ 
                <>
                  <NavBar />
                  <GoBack />
                  <GeneratedListPage />
                </>
              }
            />
            {/* <PrivateRoutes
        path="/Home"
        element={ <Home /> }
        isAuthenticated={isAuthenticated}
      /> */}
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default AppRoutes;
