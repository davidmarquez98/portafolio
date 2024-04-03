import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./../views/page/home/Home.jsx";
import About from "../views/page/about/About.jsx";
import Projects from "../views/page/projects/Projects.jsx";

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
  );
}
