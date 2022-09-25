import IconF from "./Ico";
const GettingStarted = () => {
    return (
        <div className="flex flex-col text-base font-light leading-relaxed pl-20 content-center">
            <h1 className="text-6xl pb-10">Getting Started</h1>
            <div className="bg-white opacity-70 h-0.5 w-2/3 rounded mb-10"></div>
            <div className="text-xl">
                <p className="opacity-90 text-3xl w-4/6 pb-5">Chubbit is a web app that allows you to maintain the integrity of your Metaverse interactions through the use modern Web 3.0 technologies.</p>
                <h2 className="text-6xl pb-10 mt-10">How?</h2>
                <div className="bg-white opacity-80 h-0.5 w-3/4 rounded mb-10"></div>
                <p className="text-2xl pb-5">We achieve this goal by providing you with the tools required to interact in this new environment.</p>
                <p className="text-2xl pb-5">Bringing forth a plehtora of benefits:</p>
            <ul className="list-disc text-2xl p-2 pl-10 pb-10">
                <li>Smart Contracts</li>
                <li>Decentralized Identity</li>
                <li>Decentralized Finance</li>
            </ul>
            <div className="bg-white opacity-80 h-0.5 w-3/4 rounded mb-10"></div>
            <p className="flex flex-col  justify-center items-center opacity-90 text-2xl">The engineering behind our platform involves very sophisticated new technologies that merge perfectly with Web 3.0:</p>
            </div>
            <div className="pt-10 flex flex-col items-center justify-center"><IconF /></div>
            

        </div>
    )
};

export default GettingStarted;
