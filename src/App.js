import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home"; 
import Services from "./components/Services"; 
import CommercialLaundry from "./components/Clean"; 
import AreaWeServe from "./components/AreaWeServe"; 
import About from "./components/WhyChoose"; 
import Blog from "./components/BlogSection"; 
import Contact from "./components/Footer"; 


// this is my sections
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div id="home"><Home /></div>
      <div id="services"><Services /></div>
      <div id="laundry"><CommercialLaundry /></div>
      <div id="areas"><AreaWeServe /></div>
      <div id="about"><About /></div>
      <div id="blog"><Blog /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
