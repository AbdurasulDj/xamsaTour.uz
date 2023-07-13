import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Tour(props) {
  const { t } = useTranslation();

  const [tours, setTours] = useState(props.tours);

  return (
    <>
      {tours.map((tour) => {
        return (
          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.1s"
            key={tour.name}
            style={{height: '100%'}}
          >
            <div className="room-item shadow rounded overflow-hidden" >
              <div className="position-relative" >
                <img
                  className="img-fluid"
                  src={`./${tour.img}`}
                  alt="tours img"
                />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  {tour.price}$/{t(`day`)}
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{t(`${tour.name}`)}</h5>
                </div>
                <div className="d-flex mb-3" >
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
                <p className="text-body mb-3 " >{t(`${tour.description}`)}</p>
                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-sm btn-primary rounded py-2 px-4"
                    href="#buy"
                    onClick={()=>{props.setSelectedPrice(tour.price_sum)}}
                  >
                    {t(`buy`)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}