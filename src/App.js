import React from "react";
import Footer from "./components/Footer";
import Homepage from "./pages";

function App() {
  return (
    <div className="container mx-auto flex flex-col h-screen justify-between">
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
