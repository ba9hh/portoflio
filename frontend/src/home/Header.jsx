import { useState, useEffect } from "react";
import nightMode from "../assets/nightMode.png";
import nightMode2 from "../assets/nightMode2.png";
import language2 from "../assets/language2.png";
import language from "../assets/language.png";
import icon from "../assets/icon.png";
import { useTheme } from "../ThemeContext";
import { useTranslation } from "react-i18next";
import menu from "../assets/menu.svg";

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const { t, i18n } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div
        dir="ltr"
        className="hidden w-full md:flex justify-between dark:border bg-white dark:bg-gray-800 md:px-10 md:pt-10"
      >
        <div className="w-fit flex gap-4 px-2 py-1.5 border dark:border-white border-black rounded-md">
          <img src={icon} className="w-7" />
        </div>
        <div className="w-fit flex gap-4 px-4 py-1.5 border dark:border-white border-gray-800 rounded-md">
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-100 underline"
          >
            {t("about")}
          </a>
          <a href="#projects" className="text-gray-800 dark:text-gray-100">
            {t("projects")}
          </a>
          <a href="#tools" className="text-gray-800 dark:text-gray-100">
            {t("tools")}
          </a>
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
      <div className="md:hidden sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 dark:supports-[backdrop-filter]:bg-stone-900/60 dark:bg-stone-900/50 border-b border-stone-200/60 dark:border-stone-800">
        {menuOpen && (
          <div
            className="md:hidden absolute top-full left-0 w-full 
                  bg-white/90 dark:bg-stone-900/90 backdrop-blur
                  border-b border-stone-200 dark:border-stone-800"
          >
            <ul className="flex flex-col divide-y divide-stone-200 dark:divide-stone-800">
              <a
                href="#about"
                className="px-6 py-4 text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="px-6 py-4 text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#tools"
                className="px-6 py-4 text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Tools
              </a>
            </ul>
          </div>
        )}
        <div className="md:hidden grid grid-cols-3 items-center p-4">
          <div className="w-fit relative rounded-xl border border-stone-300 bg-white/80 p-2 dark:border-stone-700 dark:bg-stone-800">
            <img
              onClick={() => setMenuOpen(!menuOpen)}
              src={menu}
              className="w-5 h-5"
            />
          </div>
          <h1 className="text-sky-600 font-semibold text-lg text-center">
            Ezzedine Jlidi
          </h1>
          <div className="flex justify-end gap-1">
            <div className="w-fit relative rounded-xl border border-stone-300 bg-white/80 p-2 dark:border-stone-700 dark:bg-stone-800">
              <img
                src={isDarkMode ? nightMode2 : nightMode}
                className="w-5 h-5"
                onClick={() => setIsDarkMode((prev) => !prev)}
              />
            </div>
            <div className="w-fit relative rounded-xl border border-stone-300 bg-white/80 p-2 dark:border-stone-700 dark:bg-stone-800">
              <img
                src={isDarkMode ? language2 : language}
                className="w-6 h-6"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
