import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import landingImg from "../../images/aaa.jpg";
import logo from "../../images/LETS.png";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import LastPart from "./LastPart";
import Footer from "./Footer";
const Landing = () => {
  return (
    <div className="landing" style={{ background: "black" }}>
      <img src={landingImg} alt="" id="img" />
      <h1 id="first_heading">RéseauLogis</h1>
      <div className="landing-first">
        <img src={logo} alt="" id="another-logo" />
        <h1>Hébergements Tunsisienne</h1>
        <p>Bienvenue Sur Notre Site Web </p>
        <button className="btn_landing" style={{ width: "120px" }}>
          <Link to="/login" className="link_landing ">
            Se Connecter
          </Link>
        </button>
        <button className="btn_landing" style={{ width: "120px" }}>
          <Link to="/register" className="link_landing">
            S'inscrire
          </Link>
        </button>
      </div>
      <FirstPart />
      <SecondPart />
      <LastPart />
      <Footer />
    </div>
  );
};

export default Landing;
