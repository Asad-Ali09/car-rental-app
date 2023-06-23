import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";
import "../styles/header.scss";
import { HashLink } from "react-router-hash-link";
import { BsDownload } from "react-icons/bs";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const deskRef = useRef([]);
  const mobRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (windowWidth > 609) {
      deskRef.current.map((el) => {
        return el.classList.remove("hidden");
      });
      mobRef.current.classList.add("hidden");
    } else {
      deskRef.current.map((el) => {
        return el.classList.add("hidden");
      });
      mobRef.current.classList.remove("hidden");
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <nav className="header">
      <h1>
        <Link to={"/"}>Renty</Link>
      </h1>
      <div className="hidden" ref={(el) => (deskRef.current[0] = el)}>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#services"}>Services</HashLink>
        <Link to={"/Cars"}>Cars</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <button className="hidden">
        <AiFillApple />
        <p>Download Now</p>
      </button>
      <div ref={mobRef}>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/Cars"}>Cars</Link>
        <Link to={"/contact"}>Contact</Link>
        <button>
          <BsDownload />
        </button>
      </div>
    </nav>
  );
};

export default Header;
