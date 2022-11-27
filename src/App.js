import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="container mx-auto flex flex-col h-screen justify-between">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
