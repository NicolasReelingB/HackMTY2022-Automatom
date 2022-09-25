import IconF from "./Ico";
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
          <h1 className="text-4.5xl pb-5 mt-10">How?</h1>
          <div className="bg-white opacity-80 h-0.5 w-full rounded mb-10"></div>
          <p className="text-lg pb-5">
            We achieve this goal by providing you with the tools required to
            interact in this new environment.
          </p>
          <h2 className="text-2xl pb-5">
            Bringing forth a plehtora of benefits:
          </h2>
          <ul className="list-disc text-lg p-2 pl-10 pb-10">
            <li>Smart Contracts</li>
            <li>Decentralized Identity</li>
            <li>Decentralized Finance</li>
          </ul>
          <div className="bg-white opacity-80 h-0.5 w-full rounded mb-10"></div>
          <p className="flex flex-col justify-start items-start opacity-90 text-lg">
            The engineering behind our platform involves very sophisticated new
            technologies that merge perfectly with Web 3.0:
          </p>
        </div>
        <div className="pt-10 pb-10 flex flex-col items-start justify-centstarter">
          <IconF />
        </div>
        <h1 className="text-4.5xl pb-5">Start now</h1>
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
        
      </div>
    </div>
  );
};

export default GettingStarted;
