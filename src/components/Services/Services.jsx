import React from "react";
import { useTranslation } from "react-i18next";

import "./Services.css";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div id="service">
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="section-title text-center text-primary text-uppercase">
              {t(`services`)}
            </h6>
            <h1 className="mb-5">
              {t(`our`)}{" "}
              <span className="text-primary text-uppercase">
                {t(`services`)}
              </span>
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a
                className="service-item rounded"
                href="#"
              >
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i className="fa fa-hotel fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 className="mb-3">{t(`rooms`)}</h5>
                <p className="text-body mb-0">
                  {t(`rooms_p`)}
                </p>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <a
                className="service-item rounded"
                href="#"
              >
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i className="fa fa-utensils fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 className="mb-3">{t(`foods`)}</h5>
                <p className="text-body mb-0">
                  {t(`foods_p`)}
                </p>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a
                className="service-item rounded"
                href="#"
              >
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i className="fa fa-spa fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 className="mb-3">{t(`historical_places`)}</h5>
                <p className="text-body mb-0">
                  {t(`historical_places_p`)}
                </p>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <a
                className="service-item rounded"
                href="#"
              >
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i className="fa fa-swimmer fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 className="mb-3">{t('gaming')}</h5>
                <p className="text-body mb-0">
                  {t(`gaming_p`)}
                </p>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <a
                className="service-item rounded"
                href="#"
              >
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i className="fa fa-users fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 className="mb-3">{t(`family`)}</h5>
                <p className="text-body mb-0">
                  {t(`family_p`)}
                </p>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <a
                className="service-item rounded"
                href="#"
              >
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i className="fa fa-user-shield fa-2x text-primary"></i>
                  </div>
                </div>
                <h5 className="mb-3">{t(`health`)}</h5>
                <p className="text-body mb-0">
                  {t(`health_p`)}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
