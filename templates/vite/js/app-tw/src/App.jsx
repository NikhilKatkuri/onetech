import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/globals.css";
import { MyContextProvider } from "./context/context";
import useMyContext from "./hooks/useMyContext";
function App() {
  const { count, func } = useMyContext();

  return ( 
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="max-w-[1280px] mx-auto p-8 text-center ">
          <div className="flex justify-center items-center gap-4 mb-6">
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={viteLogo}
                className="h-24 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
                alt="Vite logo"
              />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={reactLogo}
                className="h-24 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-spin"
                alt="React logo"
              />
            </a>
          </div>

          <h1 className="text-4xl font-bold mb-4">Vite + React</h1>

          <div className="p-8">
            <button
              className="px-4 py-2 bg-black/10 border border-black/10 hover:border-blue-700 text-black/60 rounded"
              onClick={func}
            >
              count is {count}
            </button>
            <p className="mt-4">
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>

          <p className="text-gray-500 mt-6">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div> 
  );
}

export default App;
