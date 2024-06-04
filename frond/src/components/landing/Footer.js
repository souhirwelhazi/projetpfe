import React from "react";

const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                // style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Entrer en Contact
                </h3>
                <p>Ne manquez aucune actualité de notre App.!</p>
                <form
                  action="#"
                  className="f_subscribe_two mailchimp"
                  method="post"
                  noValidate={true}
                  _lpchecked="1"
                >
                  <input
                    type="text"
                    name="EMAIL"
                    className="form-control memail"
                    placeholder="Email"
                  />
                  <button className="btn btn_get btn_get_two" type="submit">
                    S'abonner
                  </button>
                  <p
                    className="mchimp-errmessage"
                    style={{ display: "none" }}
                  ></p>
                  <p
                    className="mchimp-sucmessage"
                    style={{ display: "none" }}
                  ></p>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.4s"
                // style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Télécharger</h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="/login">Entreprise</a>
                  </li>
                  <li>
                    <a href="/login">App Android</a>
                  </li>
                  <li>
                    <a href="/login"> App ios</a>
                  </li>
                  <li>
                    <a href="/login">Ordinateur De Bureau</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.6s"
                // style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Aid</h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="/login">FAQ</a>
                  </li>
                  <li>
                    <a href="/login">Termes &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/login">Rapport</a>
                  </li>
                  <li>
                    <a href="/login">Documentation</a>
                  </li>
                  <li>
                    <a href="/login">Politique De Soutien</a>
                  </li>
                  <li>
                    <a href="/login">Confidentialité</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.8s"
                // style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Solution d'équipe
                </h3>
                <div className="f_social_icon">
                  <a href="/login" className="fab fa-facebook"></a>
                  <a href="/login" className="fab fa-twitter"></a>
                  <a href="/login" className="fab fa-linkedin"></a>
                  <a href="/login" className="fab fa-pinterest"></a>
                </div>
                <h3
                  className="f-title f_600 t_color f_size_18"
                  style={{ marginTop: "20px" }}
                >
                  A Propos de nous
                </h3>
                <div className="f_social_icon" style={{ color: "#6a7695" }}>
                  <p>
                    Découvrez notre plateforme en ligne pour acheter, vendre et
                    louer des hébergements en Tunisie et à l'étranger. Bienvenue
                    sur la première plateforme d'échange d'hébergements en
                    Tunisie...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                © RéseauLogis Inc.. 2024 Tous droits réservés.
              </p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>
                Fait avec ❤️ et{" "}
                <a href="http://cakecounter.com" target="_blank">
                  Passion
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
