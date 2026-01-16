import React from "react";
import me from "../assets/ezedineImg.jpg";
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation();
  return (
    <div className="sticky top-20 ml-auto h-fit w-1/4  bg-white dark:bg-gray-800 mt-10  flex flex-col justify-center md:mx-10">
      <div className="flex flex-col items-center h-fit md:gap-0 rounded-md  py-4 dark:md:bg-gray-700 shadow">
        <div className="flex justify-center mb-2">
          <img
            src={me}
            className="h-16 w-h-16 rounded-full aspect-square object-cover"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <h1 className="text-gray-700 dark:text-white text-xl font-semibold hidden md:block">
            {t("name")}
          </h1>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-200 font-semibolt px-4 text-sm md:text-md pb-4">
            <li>Full-stack developer</li>
            <li>Graduate in Génie Logiciel et Systèmes d'Information</li>
            <li>Self-taught in web development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
