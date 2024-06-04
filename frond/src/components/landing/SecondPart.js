import React from "react";
import campground from "../../images/campground5.jpg";
import { Link } from "react-router-dom";
const SecondPart = () => {
  return (
    <div className="second_landing">
      <div>
        <h1>Découvrez les lieux parfaits pour vivre votre passion...</h1>
      </div>
      <img src={campground} alt="" />
      <h2>Partagez votre passion à travers toute la Tunisie...</h2>
      <button>
        <Link to="/login">Découvrir</Link>{" "}
      </button>
    </div>
  );
};

export default SecondPart;
