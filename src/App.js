import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home"; 
import Footer from "./components/Footer"; 


// this is my sections
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div id="home"><Home /></div>
     <Footer />
    </div>
  );
}

export default App;
