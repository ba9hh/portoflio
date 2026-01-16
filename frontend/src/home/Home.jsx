import React from "react";
import Description from "./Description";
import Technologies from "./Technologies";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Projects from "./Projects";
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
    <div className="h-min-screen w-full bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex gap-1">
        <div className="w-3/4 mt-10">
          <section id="projects">
            <Projects />
          </section>
          <section id="tools">
            <Technologies />
          </section>
        </div>
        <Description />
      </div>
    </div>
  );
};

export default Home;
