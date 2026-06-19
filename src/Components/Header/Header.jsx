import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaTrophy,
  FaUser,
} from "react-icons/fa";

import "./Header.css";
import Stacklyimg1 from "../../assets/Stacklyimg1.webp";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Games", href: "#games" },
  { label: "Tournaments", href: "#tournaments" },
  { label: "Teams", href: "#teams" },
  { label: "Streams", href: "#streams" },
  { label: "Community", href: "#community" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`hdr ${scrolled ? "hdr--scrolled" : ""}`}>
      {/* Top Accent Line */}
      <div className="hdr-topline" />

      <div className="hdr-inner">
        {/* Logo - Redirects to Home Page */}
        <Link to="/" className="hdr-logo">
          <img
            src={Stacklyimg1}
            alt="Stackly"
            className="hdr-logo__img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hdr-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            link.label === "Home" ? (
              <Link
                key={link.label}
                to="/"
                className="hdr-nav__link"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="hdr-nav__link"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hdr-actions">
          <button
            className="hdr-btn hdr-btn--ghost"
            onClick={() => navigate("/login")}
          >
            <FaUser className="hdr-btn__icon" />
            <span>Login</span>
          </button>

          <button className="hdr-btn hdr-btn--primary" onClick={()=>{navigate("/signup"); setMenuOpen(false)}} >
            <FaTrophy className="hdr-btn__icon" />
            <span >Join Arena</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hdr-burger ${
            menuOpen ? "hdr-burger--open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`hdr-drawer ${
          menuOpen ? "hdr-drawer--open" : ""
        }`}
      >
        <nav
          className="hdr-drawer__nav"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) =>
            link.label === "Home" ? (
              <Link
                key={link.label}
                to="/"
                className="hdr-drawer__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="hdr-drawer__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hdr-drawer__actions">
          <button
            className="hdr-btn hdr-btn--ghost hdr-btn--full"
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
          >
            <FaUser className="hdr-btn__icon" />
            <span>Login</span>
          </button>

          <button className="hdr-btn hdr-btn--primary hdr-btn--full" onClick={()=>{navigate("/signup"); setMenuOpen(false)}}>
            <FaTrophy className="hdr-btn__icon" />
            <span>Join Arena</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;