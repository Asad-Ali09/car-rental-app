import React from "react";
import {
  AiFillApple,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";
import "../styles/footer.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="renty-ad">
          <article>
            <h2>Let's drive with Renty today!</h2>
            <p>
              Get the app to explore the world of premium cars, get fast and
              safe transactions to help you find your dream rent
            </p>
            <div>
              <button>
                <AiFillApple />
                <p>
                  Download on the <span>App Store</span>
                </p>
              </button>
              <button>
                <BsGooglePlay />
                <p>
                  GET IT ON <span>Google Play</span>
                </p>
              </button>
            </div>
          </article>
        </div>

        <div className="footer-links">
          <h1>
            <Link to={"/"}>Renty</Link>
          </h1>
          <div className="nav-links">
            <HashLink to={"/"}>Home</HashLink>
            <HashLink to={"/#about"}>About us</HashLink>
            <Link to={"/cars"}>Cars</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>

          <div className="link-icons">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillTwitterSquare />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
