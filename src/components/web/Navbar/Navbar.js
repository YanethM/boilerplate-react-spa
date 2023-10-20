import React, { useEffect, useState } from "react";
import { image } from "../../../assets";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import SlideBarWebMenu from "../SlideBarWebMenu/SlideBarWebMenu";
import { SocialSlideBar } from "../SocialSlideBar/SocialSlideBar";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("section1");
  const [showToggleButton, setShowToggleButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
    setShowToggleButton(section !== "section1");

    if (section !== "section1") {
      return (
        <>
          <SlideBarWebMenu />
          <SocialSlideBar />
        </>
      );
    } else {
      return null; // Si la sección es "section1", no renderizar los componentes
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Cierra el menú después de hacer clic en un enlace
  };

  return (
    <div className="webmenu-page">
      <div className="header">
        <div id="topbarMenu" className="topbarMenu">
          <div className="social-icons">
            <img src={image.linkedin} alt="facebook" />
            <img src={image.whatsApp} alt="facebook" />
            <img src={image.location} alt="facebook" />
            <img src={image.email} alt="facebook" />
          </div>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div id="menuBar" className="menuBar">
          <div className="logo">
            <img src={image.logoColor} alt="logo" />
          </div>
          <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <div className="navbar-toggle" onClick={toggleMenu}>
              ☰
            </div>
            <div className="navbar-options">
              <a href="#home" onClick={() => scrollToSection("section1")}>
                Inicio
              </a>
              <a href="#services" onClick={() => scrollToSection("section2")}>
                Servicios
              </a>
              <a href="#clients" onClick={() => scrollToSection("section3")}>
                Clientes
              </a>
              <Link to="/login">Iniciar sesión</Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="home">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <SocialSlideBar />
      <SlideBarWebMenu
        activeSection={activeSection}
        handleSetActiveSection={handleSetActiveSection}
      />
    </div>
  );
};

function Section1() {
  return <div className="section" id="section1"></div>;
}
function Section2() {
  return <div className="section" id="section2"></div>;
}

function Section3() {
  return <div className="section" id="section3"></div>;
}
