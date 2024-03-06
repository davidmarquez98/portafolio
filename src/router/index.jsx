import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./../views/page/home/Home.jsx";

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
  );
}
