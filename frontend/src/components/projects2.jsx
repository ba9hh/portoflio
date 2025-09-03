import React, { useState } from "react";
import babarImg from "../assets/babar.png";
import babar from "../assets/babar.svg";
import { useTranslation } from "react-i18next";
const Projects2 = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2 cursor-pointer">
        <img src={babarImg} onClick={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-60"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="z-10 max-w-5xl w-full p-4">
            <img
              src={babarImg}
              alt="Enlarged"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-2 border border-gray-600 dark:border-white">
        <div className="flex items-center gap-1">
          <img className="w-7" src={babar} />
          <h1 className="text-2xl font-medium text-gray-500 dark:text-gray-300">
            Babar
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-100 text-center w-2/3">
          {t("babarDescription")}
        </p>
        <div className="text-gray-400 mt-2">
          {t("websiteLink")} :{" "}
          <a
            href={"https://babar.onrender.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200 text-sm"
          >
            https://babar.onrender.com/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects2;
