import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./../views/page/home/Home.jsx";
import About from "../views/page/about/About.jsx";
import Projects from "../views/page/projects/Projects.jsx";
import Contact from "../views/page/contact/Contact.jsx";

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
  );
}
