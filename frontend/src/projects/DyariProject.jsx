import { useState } from "react";
import dyariImg from "../assets/dyari2.png";
import Modal from "../components/modal";
import dyari from "../assets/dyari.svg";
import { useTranslation } from "react-i18next";
const DyariProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-2 md:border border-gray-500 dark:border-white p-6 md:p-0">
        <div className="flex items-center gap-1">
          <img className="w-7" src={dyari} />
          <h1 className="text-2xl font-medium text-amber-300">Dyari</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-100 text-center md:w-2/3">
          {t("dyariDescription")}
        </p>
        <div className="text-gray-400 mt-2">
          {t("websiteLink")} :{" "}
          <a
            href={"https://dyaritunisie.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200 text-sm"
          >
            https://dyaritunisie.com/
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 cursor-pointer">
        <img src={dyariImg} onClick={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-60"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="z-10 max-w-5xl w-full p-4">
            <img
              src={dyariImg}
              alt="Enlarged"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          This is a Dialog!
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          You can put any content inside here.
        </p>
      </Modal> */}
    </div>
  );
};

export default DyariProject;
