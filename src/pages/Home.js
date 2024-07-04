import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import "./Home.css";
function Home() {
  
  return (
    <div className="Home">
      <Banner />
      
      <Products />
    </div>
  );
}

export default Home;
