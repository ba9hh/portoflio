import { useState, useEffect } from "react";
import nightMode from "../assets/nightMode.png";
import nightMode2 from "../assets/nightMode2.png";
import language2 from "../assets/language2.png";
import language from "../assets/language.png";
import icon from "../assets/icon.png";
import { useTheme } from "../ThemeContext";
import { useTranslation } from "react-i18next";
import menu from "../assets/menu.svg";

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const { t, i18n } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setLangMenuOpen(false);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(savedLang);
    document.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <>
      <div className="hidden w-full md:flex justify-between dark:border">
        <div className="w-fit flex gap-4 px-2 py-1.5 border dark:border-white border-black rounded-md">
          <img src={icon} className="w-7" />
        </div>
        <div className="w-fit flex gap-4 px-4 py-1.5 border dark:border-white border-gray-800 rounded-md">
          <h1 className="text-gray-800 dark:text-gray-100 underline">
            {t("about")}
          </h1>
          <h1 className="text-gray-800 dark:text-gray-100">{t("projects")}</h1>
          <h1 className="text-gray-800 dark:text-gray-100">{t("tools")}</h1>
        </div>
        <div className="relative w-fit flex gap-4 px-4 py-1.5 border border-black dark:border-white rounded-md">
          <img
            src={isDarkMode ? nightMode2 : nightMode}
            className="w-6 h-6"
            onClick={() => setIsDarkMode((prev) => !prev)}
          />

          <div className="">
            <img
              src={isDarkMode ? language2 : language}
              className="w-6 h-6"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
            />
            {langMenuOpen && (
              <div className="absolute mt-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-white rounded shadow-lg w-40 text-center z-10 -right-0.5">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  Français
                </button>
                <button
                  onClick={() => changeLanguage("ar")}
                  className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-between items-center p-4 border-b">
        <div className="relative rounded-xl border border-stone-300 bg-white/80 p-2 dark:border-stone-700 dark:bg-stone-800">
          <img src={menu} className="w-5 h-5" />
        </div>
        <h1 className="text-sky-600 font-semibold text-lg">Ezzedine Jlidi</h1>
        <div className="relative rounded-xl border border-stone-300 bg-white/80 p-2 dark:border-stone-700 dark:bg-stone-800">
          <img
            src={isDarkMode ? nightMode2 : nightMode}
            className="w-5 h-5"
            onClick={() => setIsDarkMode((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
