import React, { Component } from "react";
import sample from "../assets/img/sample.jpg";
import sample1 from "../assets/img/sample2.jfif";
import Portfolio from "./Portfolio";
import Login from "./Login";

class MainApp extends Component {
  render() {
    const portfolioLinks = [
      {
        id: "1",
        title: "Diewrine",
        caption: "Mouhamadou Lamine LO",
        img: sample,
      },
      {
        id: "2",
        title: "Sociale",
        caption: "Abdou NDAO",
        img: sample,
      },
      {
        id: "3",
        title: "Culturelle",
        caption: "Cheikh KHOUMA",
        img: sample,
      },
      {
        id: "4",
        title: "Administrative",
        caption: "Mor TINE",
        img: sample,
      },
    ];

    return (
      <div className="App">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/">
              DTSTM
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">
                    Evenements
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">
                    Structure
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    Historique
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">
                    Administration
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Bienvenue !</div>
              <div className="intro-heading text-uppercase"></div>
              <a
                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="#contact"
              >
                Nous contacter !
              </a>
            </div>
          </div>
        </header>

        <section className="page-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  Nos evenements !
                </h2>
                <h3 className="section-subheading text-muted">
                  Le programme annuel du Daara Tazawoudou Sikhar Touba Mboro
                  incluent :
                </h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-success"></i>
                  <i className="fa fa-mosque fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">GRAND MAGAL DE TOUBA</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-success"></i>
                  <i className="fa fa-kaaba fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">MAWLIDDOUL NABBI (SWS)</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-success"></i>
                  <i className="fa fa-quran fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">JOURNEE XASSIDA</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>

              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-success"></i>
                  <i className="fa fa-star-and-crescent fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">LAYLATOUL XADR</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Portfolio portfolioLinks={portfolioLinks} />

        <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  Historique du daara
                </h2>
                <h3 className="section-subheading text-muted">
                  Depuis sa création jusqu'à nos jours.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <h4 style={{ color: "#fff" }}>
                        Création
                        <br />
                        du
                        <br />
                        daara !
                      </h4>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2004</h4>
                        <h4 className="subheading">Creation</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4 style={{ color: "#fff" }}>
                        Etape
                        <br />
                        1
                        <br />
                        ...
                      </h4>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2004</h4>
                        <h4 className="subheading">Etape 1</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <h4 style={{ color: "#fff" }}>
                        Etape
                        <br />
                        2
                        <br />
                        ...
                      </h4>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2004</h4>
                        <h4 className="subheading">Etape 2</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4 style={{ color: "#fff" }}>
                        Etape
                        <br />
                        3
                        <br />
                        ...
                      </h4>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2004</h4>
                        <h4 className="subheading">Etape 3</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4 style={{ color: "#fff" }}>
                        A
                        <br />
                        nos
                        <br />
                        jours !
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light page-section" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  Administration du daara
                </h2>
                <h3 className="section-subheading text-muted">
                  Cette partie est réservée à des membres abilités.
                </h3>

                <h4 className="section-heading text-uppercase">
                  Identifiez - vous !
                </h4>
              </div>
            </div>
            <div style={{ marginBottom: "8%" }}>
              <Login id="modal" />

              <h5
                className="section-subheading text-muted"
                style={{ textAlign: "center", marginTop: "5%" }}
              >
                Ou contactez les personnes ci-dessous !
              </h5>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={sample1}
                    alt=""
                  />
                  <h4>Mor TINE</h4>
                  <p className="text-muted"> +221 77 000 00 00</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={sample1}
                    alt=""
                  />
                  <h4>Ndiassé SAMB</h4>
                  <p className="text-muted">+221 77 000 00 00</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={sample1}
                    alt=""
                  />
                  <h4>Other PEOPLE</h4>
                  <p className="text-muted">+221 77 000 00 00</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  Pour plus d'information, contactez ces personnes ci-dessus.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <a href="#something">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="img/logos/envato.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#something">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="img/logos/designmodo.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#something">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="img/logos/themeforest.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#something">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="img/logos/creative-market.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  Contactez nous !
                </h2>
                <h3
                  className="section-subheading text-muted"
                  style={{ fontSize: "25px", fontWeight: "bold" }}
                >
                  Donnez votre avis. Les champs avec le symbole " * " sont
                  obligatoires .
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form
                  id="contactForm"
                  name="sentMessage"
                  noValidate="novalidate"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Votre nom *"
                          required="required"
                          data-validation-required-message="Please enter your name."
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder="Votre email *"
                          required="required"
                          data-validation-required-message="Please enter your email address."
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="phone"
                          type="tel"
                          placeholder="Votre téléphone"
                          data-validation-required-message="Please enter your phone number."
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Ecrivez votre message ici... *"
                          required="required"
                          data-validation-required-message="Please enter a message."
                        ></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton"
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        Envoyez votre message !
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">
                  Copyright &copy; CMW 2020 from EPT !
                </span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    Développé par Cheikh Mbacké WADE
                  </li>
                  <li className="list-inline-item">
                    Eleve ingénieur à l'Ecole Polytechnique de Thiès
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default MainApp;
