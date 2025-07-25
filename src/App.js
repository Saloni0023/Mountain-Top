import React from 'react';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Home from "./Pages/Home";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar />
     <Home />
     <Footer />
    </div>
  );
}

export default App;
