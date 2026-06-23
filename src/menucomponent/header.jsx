import react, { useState } from "react";
import Logo from "./logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  return (
    <header>
      <Logo />
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? "Close" : "Open"} Menu
      </button>
    </header>
  );
};

export default Header;