import React, { useState } from "react";
import me from "../assets/ezedineImg.jpg";
import { useTranslation } from "react-i18next";
import upArrow from "../assets/up-arrow.png";
const Description = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);

  return (
    <div className="sticky top-20 ml-auto h-fit w-full md:w-1/4 bg-gray-50 dark:bg-gray-800 mt-4 md:mt-10 hidden md:flex flex-col justify-center md:mx-10">
      <div
        className="flex justify-between items-center px-3 p-2 mb-4 bg-white shadow-2xs w-full rounded-sm dark:bg-gray-700 border border-gray-200 border-b-0 dark:border-b"
        onClick={() => setOpen((prev) => !prev)}
      >
        <h1 className="text-gray-600 dark:text-gray-50 font-semibold ">
          {/* {t("favorites")} */}
          About me
        </h1>
        <img
          src={upArrow}
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {open && (
        <div className="flex flex-col items-center h-fit md:gap-0 rounded-md bg-white py-4 dark:md:bg-gray-700 shadow dark:border border-gray-200">
          {/* <div className="flex justify-center mb-1">
            <img
              src={me}
              className="h-14 rounded-full aspect-square object-cover"
            />
        </div> */}
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <div>
              <h1 className="text-gray-700 dark:text-white font-semibold hidden md:block text-center">
                {t("name")}
              </h1>
              <h1 className="text-gray-500 text-sm dark:text-white hidden md:block text-center">
                (ezedinejlidi3@gmail.com)
              </h1>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 font-semibolt px-4 text-sm md:text-md">
              <li>Web Developer</li>
              <li>UI/UX Designer</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
