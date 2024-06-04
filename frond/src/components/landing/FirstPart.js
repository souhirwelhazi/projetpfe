import React from "react";
import { Link } from "react-router-dom";
const FirstPart = () => {
  return (
    <div className="div_first_part">
      <div>
        <h1>Ou veux-tu aller ?</h1>
      </div>
      <main>
        <div id="div_one">
          <h2>Villa</h2>
          <button>
            <Link to="/login">Découvrir</Link>
          </button>
        </div>
        <div id="div_two">
          <h2>Hôtel </h2>
          <button>
            <Link to="/login">Découvrir</Link>
          </button>
        </div>
        <div id="div_three">
          <h2>Camping</h2>
          <button>
            <Link to="/login">Découvrir</Link>
          </button>
        </div>
        <div id="div_four">
          <h2>Maison D'hôtes </h2>
          <button>
            <Link to="/login">Découvrir</Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default FirstPart;
