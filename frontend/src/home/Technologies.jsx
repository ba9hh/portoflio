import React from "react";
import { useTranslation } from "react-i18next";
import upArrow from "../assets/up-arrow.png";
const Technologies = () => {
  const { t } = useTranslation();
  return (
    <div className=" bg-gray-50 dark:bg-gray-800 md:ml-10 pb-10">
      <div className="flex justify-between items-center px-3 p-2 mb-4 bg-white shadow-2xs w-full rounded-sm">
        <h1 className="text-gray-800 dark:text-gray-50 font-semibold">
          {t("technologies")}
        </h1>
        <img src={upArrow} className="w-4 h-4 rotate-180 " />
      </div>
      <div className="bg-white p-3 shadow flex flex-row flex-wrap justify-center md:justify-start gap-6 mt-2 md:mt-0">
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDz7VeoLeo6kyPUJokKtq8ISE_j5MNreaXqKFKqXqLJ6TbPV0jJrhuZ3nPH_Ee47MRTfXx5usIrDcQFb2fFUlpQKmiByAmz6L5OMnU4cU"
          />
          <h1 className="text-gray-600 dark:text-gray-300 border-t border-gray-600 dark:border-white mt-3 w-full text-center">
            React
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&"
          />
          <h1 className="text-gray-600 dark:text-gray-300 border-t border-gray-600 dark:border-white mt-3 w-full text-center">
            Node js
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&s"
          />
          <h1 className="text-gray-600 dark:text-gray-300 border-t border-gray-600 dark:border-white mt-3 w-full text-center">
            Express js
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://www.svgrepo.com/show/374118/tailwind.svg"
          />
          <h1 className="text-gray-600 dark:text-gray-300 border-t border-gray-600 dark:border-white mt-3 w-full text-center">
            Tailwind
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://www.svgrepo.com/show/331488/mongodb.svg"
          />
          <h1 className="text-gray-600 dark:text-gray-300 border-t border-gray-600 dark:border-white mt-3 w-full text-center">
            Mongo DB
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://avatars.githubusercontent.com/u/54469796?v=4"
          />
          <h1 className="text-gray-600 dark:text-gray-300 border-t border-gray-600 dark:border-white mt-3 w-full text-center">
            Supabase
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
