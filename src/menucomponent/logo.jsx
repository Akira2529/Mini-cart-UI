import React from "react";
import Header from "./header";
import logoImage from "../assets/mini-kart.png";

const Logo = () => {
  return (
    <img
      src={logoImage}
      alt="Logo"
      style={{ width: "100px", height: "auto" }}
    />      
  );
};

export default Logo;