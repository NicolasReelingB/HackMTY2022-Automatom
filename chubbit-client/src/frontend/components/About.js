import About_Info from "./About_info";
import What from "./What";
import Why from "./Why";
import Tech from "./Tech";
import How from "./How";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div className="about">
        <h1>About</h1>
        <nav>
            <div className="flex flex-row justify-start items-center w-full navlinks">
                <Link to="/what" className="text-gray-200 text-md mx-4">
                What is Chubbit?
                </Link>
                <Link to="/Tech" className="text-gray-200 text-md mx-4">
                How does it work?
                </Link>
                <Link to="/Why" className="text-gray-200 text-md mx-4">
                Why Chubbit?
                </Link>
                <Link to="/my-listed-items" className="text-gray-200 text-md mx-4">
                How to use Chubbit?
                </Link>
            </div>
        </nav>

        </div>
    )
    };

export default About;