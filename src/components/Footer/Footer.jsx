import React from "react";
import { useTranslation } from "react-i18next";

import "./Footer.css";

function Footer(props) {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">
                {t(`contacts`)}
              </h6>
              <p className="mb-2">
                <a href="https://goo.gl/maps/aKjBYKYBGP8boM3x8" className="text-white btn-link" target="_blank">
                  <i className="fa fa-map-marker-alt me-3"></i>
                  {t(`address`)}
                </a>
              </p>
              <p className="mb-2">
                <a href="tel:+998885372424" className="text-white btn-link">
                  <i className="fa fa-phone-alt me-3"></i>
                  +998 88 537 24 24
                </a>
              </p>
              <p className="mb-2">
                <a href="tel:+998973472434" className="text-white btn-link">
                  <i className="fa fa-phone-alt me-3"></i>
                  +998 97 347 24 34
                </a>
              </p>
              <p className="mb-2">
                <a href="mailto:xamsatour@gmail.com" className="text-white btn-link">
                  <i className="fa fa-envelope me-3"></i>
                  xamsatour@gmail.com
                </a>
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://t.me/xamsa_tour"
                  target="_blank"
                >
                  <i className="fab fa-telegram"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="#"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://instagram.com/xamsatour?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="row gy-5 g-4">
                <div className="col-md-6">
                  <h6 className="section-title text-start text-primary text-uppercase mb-4">
                    {t(`about_us`)}
                  </h6>
                  <ul className="p-0">
                    <li>
                      <a
                        className="btn btn-link px-0"
                        href="#about"
                      >
                        {t(`xamsa_tour`)}
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn btn-link px-0"
                        href="#GetInTouch"
                      >
                        {t(`contact`)}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* click an payme */}
            <div className="col-sm-3 ">
                  <p className="w-50">
                    <a
                      className="btn py-2 w-75"
                      href="https://www.click.uz"
                      target="_blank"
                    >
                      <img
                        className="w-75"
                        src="/clickuz.png"
                        alt="click.uz"
                      />
                    </a>
                  </p>
                  <p className="w-50">
                    <a
                      className="btn py-2 w-75"
                      href="https://www.payme.uz"
                      target="_blank"
                    >
                      <img
                        className="w-75"
                        src="/payme.svg"
                        alt="payme.uz"
                      />
                    </a>
                  </p>
            </div>
          </div>
        </div>

        {/* copyrights */}
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a
                  className="border-bottom"
                  href="#home"
                >
                  {t(`xamsa_tour`)}
                </a>
                , {t(`all_right_reserved`)} {" "}
                <a
                  className="border-bottom"
                  href="https://abdurasul.dev"
                >
                  ACeK`
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;