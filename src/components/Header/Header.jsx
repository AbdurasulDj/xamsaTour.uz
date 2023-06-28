import React from "react";
import { useTranslation } from "react-i18next";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./Header.css";

function Heading(props) {
  const { t, i18n } = useTranslation();

  function handleLang(lng) {
    event.preventDefault();
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-capitalize">
        <div className="container">
          <button
            className="navbar-toggler border-white text-white"
            type="button"
            data-toggle="collapse"
            data-target="#show-menu"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="show-menu"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#home"
                >
                  {t(`home`)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                >
                  {t(`about_us`)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#agency"
                >
                  {t(`tours`)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#service"
                >
                  {t(`service`)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#GetInTouch"
                >
                  {t(`contact`)}
                </a>
              </li>
              {/* language dropdown */}
              <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn text-white dropdown-toggle btn-link shadow-none "
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        style={{
                          width: "1.5rem",
                          paddingBottom: ".3rem",
                          color: "white",
                        }}
                        src="./globe-solid.svg"
                        alt="change language icon"
                      />
                    </button>
                    <div
                      className="dropdown-menu bg-transparent "
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleLang('en')}
                      >
                        <span className='fi fi-gb'></span>
                        &nbsp;
                        eng
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleLang('ru')}
                      >
                        <span className='fi fi-ru'></span>
                        &nbsp;
                        ру
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleLang('uz')}
                      >
                        <span className='fi fi-uz'></span>
                        &nbsp;
                        uz
                      </a>
                    </div>
                  </div>
                  
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="home">
        <div className="overlay">
          <div className="container">
            <div>
              <h1>
                <span>{t(`xamsa_tour`)}</span>
                <br />
                {t(`header_h1`)}
              </h1>
              {/* <p>
                {t(`header_p`)}
              </p> */}
              <button>
                <a
                  href="#GetInTouch"
                  className="text-uppercase"
                >
                  {t(`contact_us`)}
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Heading;
