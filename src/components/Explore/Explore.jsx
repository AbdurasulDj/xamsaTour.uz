import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ToursData from "./assets/Tours.json";

import Tour from "./assets/Tour";

import "./Explore.css";

function Explore(props) {
  const { t } = useTranslation();
  const [tours, setTours] = useState(() => ToursData);

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
            <Tour
              setSelectedPrice={props.setSelectedPrice}
              tours={tours}
              key={tours.key}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
