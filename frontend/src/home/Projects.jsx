import React from "react";
import DyariProject from "../projects/DyariProject";
import BabarProject from "../projects/BabarProject";
import KtebnaProject from "../projects/KtebnaProject";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className=" bg-white dark:bg-gray-800 md:px-10 pb-10">
      <h1 className="text-gray-600 dark:text-gray-50 font-bold p-2">
        {t("favorites")}
      </h1>
      <DyariProject />
      <KtebnaProject />
      <BabarProject />
    </div>
  );
};

export default Projects;
