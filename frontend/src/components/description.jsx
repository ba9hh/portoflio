import React from "react";
import me from "../assets/ezedineImg.jpg";
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full border-white bg-white dark:bg-gray-800 md:pt-10 pb-7 flex justify-center md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-around md:gap-5 border rounded-md md:px-5 py-2 border-white md:bg-gray-200 dark:bg-gray-700">
        <div className="md:hidden flex justify-center py-4">
          <img
            src={me}
            className="w-1/4 rounded-full aspect-square object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-2">
          <h1 className="text-gray-700 dark:text-white text-3xl font-bold hidden md:block">
            {t("name")}
          </h1>
          <p className="text-gray-500 dark:text-gray-200 font-semibolt text-center text-lg px-4">
            {t("description")}
          </p>
        </div>
        <div className="hidden md:w-1/2 md:flex justify-center">
          <img
            src={me}
            className="w-1/2 rounded-full aspect-square object-cover p-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
