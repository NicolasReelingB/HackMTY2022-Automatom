import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Hero() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 h-screen w-screen"
      style={{
        backgroundImage:
          'url("https://xpertstec.com/wp-content/uploads/2022/03/MEta-Verse.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center col-span-1">
        <h1 className="font-bold text-left text-6xl">Chubbit</h1>
      </div>
      <div className="flex flex-col justify-center items-center col-span-1">
        <span className="text-left">
          <ImQuotesLeft fontSize={40} />
        </span>
        <h3 className="text-4xl font-bold text-right my-4">
          Two WORLDS, one YOU
        </h3>
        <span className="text-right">
          <ImQuotesRight fontSize={40} className="text-right" />
        </span>
        <p className="my-4">Explore the best of both worlds, insured.</p>
      </div>
    </div>
  );
}
