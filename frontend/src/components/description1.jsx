import React from "react";
import me from "../assets/ezedineImg.jpg";
import { useTranslation } from "react-i18next";

const Description1 = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full border-white">
      <div className="flex flex-col md:flex-row items-center justify-around gap-5 border  rounded-md px-5 py-2 border-white bg-gray-200 dark:bg-gray-700">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-2">
          <h1 className="text-gray-700 dark:text-white text-3xl font-bold">
            {t("name")}
          </h1>
          <p className="text-gray-500 dark:text-gray-200 font-semibolt text-center text-lg">
            {t("description")}
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src={me}
            className="w-1/2 rounded-full aspect-square object-cover p-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Description1;
