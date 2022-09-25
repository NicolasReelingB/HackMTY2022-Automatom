import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestingSite from "../src/TestingSite";
import FaceDetect from "../src/FaceDetect";

const RouterNav = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FaceDetect />} />
        <Route path="/test" element={<TestingSite />} />
      </Routes>
    </Router>
  );
};

export default RouterNav;
