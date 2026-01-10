import React from "react";
import { useTranslation } from "react-i18next";
const Technologies = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-white dark:bg-gray-800 px-10 pb-12">
      <h1 className="text-gray-800 dark:text-gray-50 font-bold p-2">
        {t("technologies")}
      </h1>
      <div className="flex gap-6 mt-4">
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
      </div>
    </div>
  );
};

export default Technologies;
