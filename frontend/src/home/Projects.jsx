import React from "react";
import DyariProject from "../projects/DyariProject";
import BabarProject from "../projects/BabarProject";
import KtebnaProject from "../projects/KtebnaProject";
import upArrow from "../assets/up-arrow.png";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className=" bg-gray-50 dark:bg-gray-800 md:ml-10 pb-10">
      <div className="flex justify-between items-center px-3 p-2 mb-4 bg-white shadow-2xs w-full rounded-sm">
        <h1 className="text-gray-600 dark:text-gray-50 font-semibold ">
          {t("favorites")}
        </h1>
        <img src={upArrow} className="w-4 h-4 rotate-180" />
      </div>
      <div className="bg-white">
        <KtebnaProject />
        <DyariProject />
        <BabarProject />
      </div>
    </div>
  );
};

export default Projects;
