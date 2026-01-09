import React from "react";
import Description from "./description";
import Projects1 from "./projects1";
import Projects2 from "./projects2";
import Projects3 from "./projects3";
import Technologies from "./technologies";
import NavBar from "./navBar";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div className="h-min-screen w-full bg-white dark:bg-gray-900">
      <div className=" bg-red-200 w-full">
        <div className=" bg-white dark:bg-gray-800 md:px-10 md:pt-10">
          <NavBar />
        </div>
        <Description />
        <div className=" bg-white dark:bg-gray-800 md:px-10 pb-10">
          <h1 className="text-gray-600 dark:text-gray-50 font-bold p-2">
            {t("favorites")}
          </h1>
          <Projects1 />
          <Projects3 />
          <Projects2 />
        </div>
        <div className="flex w-full bg-white dark:bg-gray-800 px-10 pb-12">
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default Home;
