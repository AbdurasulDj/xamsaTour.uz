import React from "react";
import { useTranslation } from "react-i18next";

import "./Explore.css";

function Explore(props) {
  const { t } = useTranslation();

  return (
    <div id="agency">
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="section-title text-center text-primary text-uppercase">
              {t(`tours`)}
            </h6>
            <h1 className="mb-5">
              {t(`our`)}{" "}
              <span className="text-primary text-uppercase">{t(`tours`)}</span>
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="./Samarqand.jpg"
                    alt=""
                  />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                    $25/{t(`day`)}
                  </small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{t(`samarqand`)}</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3">
                      <i className="fa fa-bed text-primary me-2"></i>
                      {t(`room`)}
                    </small>
                    <small className="border-end me-3 pe-3">
                      <i className="fa fa-utensils text-primary me-2"></i>
                      {t(`food`)}
                    </small>
                    <small>
                      <i className="fa fa-headset text-primary me-2"></i>
                      {t(`gid`)}
                    </small>
                  </div>
                  <p className="text-body mb-3">
                    {t(`samarqand_p`)}
                  </p>
                  {/* <div className="d-flex justify-content-between">
                                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                                </div> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="./turkia.jpg"
                    alt=""
                  />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                    $50/{t(`day`)}
                  </small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{t(`turkiya`)}</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3">
                      <i className="fa fa-bed text-primary me-2"></i>
                      {t(`room`)}
                    </small>
                    <small className="border-end me-3 pe-3">
                      <i className="fa fa-utensils text-primary me-2"></i>
                      {t(`food`)}
                    </small>
                    <small>
                      <i className="fa fa-headset text-primary me-2"></i>
                      {t(`gid`)}
                    </small>
                  </div>
                  <p className="text-body mb-3">
                    {t(`turkiya_p`)}
                  </p>
                  {/* <div className="d-flex justify-content-between">
                                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                                </div> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="./dubai.jpg"
                    alt=""
                  />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                    $100/{t(`day`)}
                  </small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{t(`dubai`)}</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3">
                      <i className="fa fa-bed text-primary me-2"></i>
                      {t(`room`)}
                    </small>
                    <small className="border-end me-3 pe-3">
                      <i className="fa fa-utensils text-primary me-2"></i>
                      {t(`food`)}
                    </small>
                    <small>
                      <i className="fa fa-headset text-primary me-2"></i>
                      {t(`gid`)}
                    </small>
                  </div>
                  <p className="text-body mb-3">
                  {t(`dubai_p`)}
                  </p>
                  {/* <div className="d-flex justify-content-between">
                                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
