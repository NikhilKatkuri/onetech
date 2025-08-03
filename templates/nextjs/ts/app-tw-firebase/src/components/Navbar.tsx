import React from "react";
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="absolute left-1/2 -translate-x-1/2 top-4 mx-auto  md:top-8 [--width:90%] sm:[--width:24rem] md:[--width:30rem] w-[var(--width)] rounded-full bg-gray-100 dark:bg-neutral-50/10 backdrop-blur-xl z-10 md:scale-[1.15] ">
        <div className="flex items-center justify-between px-4 py-2">
          <Link
            href="/"
            className="flex items-center transition-all ease-in-out"
          >
            <Image
              width={24}
              height={24}
              src="/onetech.svg"
              alt="--onetech--"
              className="w-10 h-10"
            />
            <span className="max-md:hidden block mx-2 text-lg font-medium text-slate-800 dark:text-neutral-200">
              OneTech
            </span>
          </Link>
          <ThemeToggler />
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
