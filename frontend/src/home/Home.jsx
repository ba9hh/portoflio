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
    <div className="h-min-screen w-full bg-white dark:bg-gray-900">
      <Header />
      <section id="about">
        <Description />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="tools">
        <Technologies />
      </section>
    </div>
  );
};

export default Home;
