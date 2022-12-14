import About from "./About";
import { Link } from "react-router-dom";

const GettingStarted = ({ web3Handler, account }) => {
  return (
    <div className="flex flex-col">
      <div className="container text-base font-light leading-relaxed p-10 content-center">
        <h1 className="text-6xl pb-6 pt-2">Getting Started</h1>
        <div className="bg-white opacity-70 h-0.5 w-full rounded mb-10"></div>
        <div className="text-xl">
          <p className="opacity-90 text-lg w-4/6 pb-10">
            Chubbit is a web app that allows you to maintain the integrity of
            your Metaverse interactions through the use modern Web 3.0
            technologies.
          </p>
        </div>
        <About />
        <h1 className="text-4.5xl pb-5 pt-10">Start now</h1>
        <div className="bg-white opacity-80 h-0.5 w-full rounded mb-10"></div>
        <p className="text-2xl">Yes, it's that simple...</p>
        {account ? (
          <Link to={`/`} target="_blank" rel="noopener noreferrer">
            <span className="rounded-lg border-white py-2 px-4 text-white text-sm text-bold">
              {account.slice(0, 5) + "..." + account.slice(38, 42)}
            </span>
          </Link>
        ) : (
          <button
            onClick={web3Handler}
            className="rounded-full bg-blue-700 py-2 px-4 text-white text-sm mt-4"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default GettingStarted;
