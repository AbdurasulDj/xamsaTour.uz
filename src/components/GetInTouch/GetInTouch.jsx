import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import "./GetInTouch.css";

function GetInTouch(props) {
  // i18n
  const { t } = useTranslation();

  const form = useRef();

  // control form data
  const [formData, setFormData] = React.useState({
    from_name: "",
    user_email: "",
    message: "",
  });

  // store form data in state
  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  // change btn if sent
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(()=>{
    if( btnDisabled){
      setTimeout(()=>{
        setBtnDisabled(false)
      }, 5000)
      console.log('btn set to false')
    }
  }, [btnDisabled])
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8vtxe1k",
        "template_jnev86d",
        form.current,
        "fPVFtAORj0x1TWhMR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setBtnDisabled(true);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="GetInTouch">
      <div
        className="container newsletter mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row justify-content-center">
          <div className="col-lg-10 border rounded p-1">
            <div className="border rounded text-center p-1">
              <div className="bg-white rounded text-center p-5">
                <h4 className="mb-4">
                  {t(`contact_us_h1`)}{" "}
                  <span className="text-primary text-uppercase">{t(`contact_us_h1_span`)}</span>
                </h4>
                <form
                  className="position-relative mx-auto"
                  style={{ maxWidth: "400px" }}
                  ref={form}
                  onSubmit={
                    btnDisabled
                      ? () => {
                          return;
                        }
                      : sendEmail
                  }
                >
                  <input
                    name="from_name"
                    className="form-control w-100 py-3 ps-4 pe-5 mb-3"
                    type="text"
                    required
                    onChange={handleChange}
                    placeholder={t("your_name")}
                    value={formData.name}
                  />
                  <input
                    name="user_email"
                    className="form-control w-100 py-3 ps-4 pe-5 mb-3"
                    type="text"
                    required
                    onChange={handleChange}
                    placeholder={t("your_email")}
                    value={formData.email}
                  />
                  <textarea
                    name="message"
                    required
                    className="form-control w-100 py-3 ps-4 pe-5 mb-3"
                    onChange={handleChange}
                    placeholder={t("your_message")}
                    value={formData.message}
                  ></textarea>
                  {/* change btn */}
                  {
                    btnDisabled ?
                      <button
                        id="button"
                        disabled={btnDisabled}
                        className="btn btn-success pointer-disabled py-2 px-5"
                        style={{cursor: 'not-allowed', pointerEvents: 'none'}}
                      >
                        {t(`sent`)}
                      </button> 
                    : <button
                        id="button"
                        disabled={btnDisabled}
                        className="btn btn-primary py-2 px-5 "
                      >
                        {t(`send`)}
                      </button>
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
