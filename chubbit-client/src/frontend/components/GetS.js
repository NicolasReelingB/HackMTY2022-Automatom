import IconF from "./Ico";
import About from "./About";
const GettingStarted = () => {
  return (
    <div className="flex flex-col">
      <div className="container text-base font-light leading-relaxed p-10 content-center">
        <h1 className="text-6xl pb-6 pt-2">Getting Started</h1>
        <div className="bg-white opacity-70 h-0.5 w-full rounded mb-10"></div>
        <div className="text-xl">
          <p className="opacity-90 text-lg w-4/6 pb-5">
            Chubbit is a web app that allows you to maintain the integrity of
            your Metaverse interactions through the use modern Web 3.0
            technologies.
          </p>
        </div>
        <About />
        <h1 className="text-4.5xl pb-5 pt-5">Start now</h1>
        <div className="bg-white opacity-80 h-0.5 w-full rounded mb-10"></div>
        <p className="text-lg">Take your first steps in the world of web 3.0 by following these simple instructions:</p>
        <ul className="list-disc space-y-5 text-lg pt-5 pl-10 pb-10">
            <li>Install Metamask</li>
            <li>Connect your wallet</li>
            <li>Create a Chubbit account</li>
            <li>Log in</li>
            <li>Acquire your first Chubbits</li>
            <li>Make your first purchase or sell your first NFT</li>  
        </ul>
        <p className="text-2xl">Yes, it's that simple...</p>
      </div>
    </div>
  );
};

export default GettingStarted;
