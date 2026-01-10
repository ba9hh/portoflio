import React, { useState } from "react";
import logo from "../assets/logo.png";
import ktebna from "../assets/ktebna.png";
import { useTranslation } from "react-i18next";
const book = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-book-open-icon lucide-book-open"
  >
    <path d="M12 7v14" />
    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
  </svg>
);
const KtebnaProject = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:hidden cursor-pointer">
        <img src={ktebna} onClick={() => setIsModalOpen(true)} />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-2 md:border border-gray-600 dark:border-white p-6 md:p-0">
        <div className="flex items-center gap-1">
          <span className="w-7 text-amber-700">{book}</span>
          <h1 className="text-2xl font-medium text-amber-800 text-[#1894A5]">
            Ktebna
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-100 text-center md:w-2/3">
          {t("ktebnaDescription")}
        </p>
        <div className="text-gray-400 mt-2">
          {t("websiteLink")} :{" "}
          <a
            href={"https://ktebna.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200 text-sm"
          >
            https://ktebna.com/
          </a>
        </div>
      </div>
      <div className="hidden md:block w-full md:w-1/2 cursor-pointer">
        <img src={ktebna} onClick={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-60"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="z-10 max-w-5xl w-full p-4">
            <img
              src={ktebna}
              alt="Enlarged"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default KtebnaProject;
