import React from 'react';
import { useTranslation } from "react-i18next";


import './About.css'

function About(props) {
  const { t } = useTranslation();

  return (
    <div id='about'>
      <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <h6 className="section-title text-start text-primary text-uppercase">{t(`about_us`)}</h6>
                        <h1 className="mb-4"><span className="text-primary text-uppercase">{t(`xamsa_tour`)}</span></h1>
                        <p className="mb-4">{t(`about_p`)}</p>
                        <div className="row g-3 pb-4">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-plane-departure fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">200+</h2>
                                        <p className="mb-0">{t(`tours`)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">10</h2>
                                        <p className="mb-0">{t(`staff`)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="border rounded p-1">
                                    <div className="border rounded text-center p-4">
                                        <i className="fa fa-users fa-2x text-primary mb-2"></i>
                                        <h2 className="mb-1" data-toggle="counter-up">100+</h2>
                                        <p className="mb-0">{t(`clients`)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="">{t(`contact_us`)}</a>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <img  className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="./usa.jpg" style={{marginTop: "25%"}}/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="./about-2.jpg"/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="./about-3.jpg"/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="./Japan2.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;