import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./components/Browse";
import Detils from "./components/Detils";
import StreameAll from "./components/StreameAll";
import Profile from "./components/Profile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/detils" element={<Detils />} />
          <Route path="/streame" element={<StreameAll />} />
          <Route path="/profile" element={ <Profile/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
