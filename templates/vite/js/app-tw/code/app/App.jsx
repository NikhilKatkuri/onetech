import React from "react";
import Navbar from "./components/Navbar";
import reactsvg from "./assets/react.svg"; 
const App = () => {
  return (
    <React.Fragment>
      <div className="h-screen w-full bg-neutral-50 dark:bg-neutral-950 relative flex items-center justify-center">
        <Navbar />
        <div className="flex items-center flex-col mx-auto max-md:px-4">
          <div className="flex items-center space-x-8 sm:space-x-16 flex-wrap my-6">
            <span className="">
              <img src="/vite.svg" alt="" className="h-16 sm:h-24" />
            </span>
            <span className="">
              <img
                src={reactsvg}
                alt=""
                className="h-16 sm:h-24 animate-[spin_3s_linear_infinite] "
              />
            </span>
          </div>
          <h1 className="font-semibold text-3xl my-3 dark:text-white">
            Vite + React
          </h1>
          <h2 className="text-lg text-neutral-600 text-center font-semibold dark:text-neutral-400">
            Lightning-fast development with modern tooling
          </h2>
          <p className="text-sm text-neutral-500  max-w-md text-center my-2">
            This project is powered by{" "}
            <strong>
              <a href="https://vite.dev" target="_blank" className="">
                Vite{" "}
              </a>
            </strong>{" "}
            and{" "}
            <strong>
              <a href="https://react.dev" target="_blank" className="">
                React
              </a>
            </strong>
            , offering instant reloads, efficient builds, and a smooth developer
            experience.
          </p> 
          <p className="text-sm text-neutral-500  max-w-md text-center my-2 ">
            <p className="">start editing : <code className="px-2 py-2 bg-black/5 dark:bg-white/5 rounded-md">
              app/App.jsx
             </code></p>
             
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
