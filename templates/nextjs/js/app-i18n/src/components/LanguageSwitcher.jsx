"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import React, { useState } from "react";
import * as NextNav from "next/navigation";
import localeLanguages from "@/config/Languages";
const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const mainPathname = NextNav.usePathname(); 
  const changeLanguage = (lang) => {
    router.replace(pathname, { locale: lang });
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <label className="h-8 w-8 rounded-full bg-gray-200 dark:bg-neutral-50/10 flex items-center justify-center relative">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="peer relative z-10 bg-white p-1 rounded-full cursor-pointer shadow hover:shadow-md transition-all duration-300 ease-in-out active:scale-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
            />
          </svg>
        </button>
        <div
          className={`absolute ${!isOpen ? "scale-0" : "scale-100"} min-h-28 transition-all ease-in-out flex flex-col space-y-2 justify-end duration-100  py-4 top-full transform -translate-y-4 w-8 rounded-b-full bg-gray-200 dark:bg-neutral-50/10 `}
        >
          {localeLanguages.map((lang) => {
            return (
              <button
                key={lang}
                onClick={() => {
                  changeLanguage(lang);
                  setIsOpen(false);
                }}
                className={`text-xs text-center block  cursor-pointer ${!mainPathname.includes(lang) ? "text-gray-700 dark:text-neutral-300" : "text-indigo-500"} `}
              >
                {lang}
              </button>
            );
          })}
        </div>
      </label>
    </>
  );
};

export default LanguageSwitcher;