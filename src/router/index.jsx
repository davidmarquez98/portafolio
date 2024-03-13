import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./../views/page/home/Home.jsx";
import About from "../views/page/about/About.jsx";

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
  );
}
