import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { useTranslations } from "next-intl";
const App = () => {
  const languageText = useTranslations();
  const intro = languageText.raw("intro");
  let description = languageText.raw("description");
  description = description.replaceAll(/:-:/g, "<strong>");
  description = description.replaceAll(/-:-/g, "</strong>");
  return (
    <React.Fragment>
      <div className="h-screen w-full bg-neutral-50 dark:bg-neutral-950 relative flex items-center justify-center">
        <Navbar />
        <div className="flex items-center flex-col mx-auto max-md:px-4">
          <div className="flex items-center space-x-8 sm:space-x-16 flex-wrap my-6">
            <span className="">
              <Image
                height={36}
                width={36}
                src="/next.svg"
                alt=""
                className="w-16 sm:w-20 aspect-square"
              />
            </span>
            <span className="">
              <Image
                height={36}
                width={36}
                src="/next-intl.svg"
                alt=""
                className="w-16 sm:w-20 aspect-square dark:invert"
              />
            </span>
          </div>
          <h1 className="font-semibold text-3xl my-3 dark:text-white">
            Next.js + Next-Intl
          </h1>
          <h2 className="text-lg text-neutral-600 text-center font-semibold dark:text-neutral-400">
            {intro}
          </h2>
          <p
            className="text-sm text-neutral-500  max-w-md text-center my-2"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <p className="text-sm text-neutral-500  max-w-md text-center my-2 ">
            <span className="">
              start editing :{" "}
              <code className="px-2 py-2 bg-black/5 dark:bg-white/5 rounded-md">
                app/[locale]/page.js
              </code>
            </span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
