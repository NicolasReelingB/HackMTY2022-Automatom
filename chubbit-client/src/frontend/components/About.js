import React from "react";
import What from "./about/What";
import Why from "./about/Why";
import Tech from "./about/Tech";
import How from "./about/How";

const About = () => {
  const [about, setAbout] = React.useState(1);

  return (
    <div className="about">
      <h1>About</h1>
      <nav>
        <div className="flex flex-row justify-start items-center w-full navlinks mt-5">
          <button
            onClick={() => setAbout(1)}
            className="text-gray-200 text-md mx-4"
          >
            What is Chubbit?
          </button>
          <button
            onClick={() => setAbout(2)}
            className="text-gray-200 text-md mx-4"
          >
            How does it work?
          </button>
          <button
            onClick={() => setAbout(3)}
            className="text-gray-200 text-md mx-4"
          >
            Why Chubbit?
          </button>
          <button
            onClick={() => setAbout(4)}
            className="text-gray-200 text-md mx-4"
          >
            How to use Chubbit?
          </button>
        </div>
      </nav>
      <div className="bg-white opacity-80 h-0.5 w-full rounded mb-10"></div>
      {about === 1 && <What />}
      {about === 2 && <Tech />}
      {about === 3 && <Why />}
      {about === 4 && <How />}
    </div>
  );
};

export default About;
