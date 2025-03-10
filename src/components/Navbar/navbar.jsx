import { useState } from "react";
import "./navbar.css";
import logo2 from "/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home"><img src={logo2} alt="Logo" /></a>
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Why Us</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Discovery</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
