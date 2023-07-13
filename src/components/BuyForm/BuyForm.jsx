import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./BuyForm.css";

const SelectBtn = () =>{
  const { t } = useTranslation();
  return (
    <span>
      <a href="#agency" className="btn text-danger"> {t(`select_tour`)}</a>
    </span>
  )
}

const BuyForm = (props) => {
  const { t } = useTranslation();
  const [ formData, setFormData ] = useState({
    "account[usr_name]": '',
    "account[usr_surname]": '',
    "account[usr_phone_number]": '',
    "account[usr_email]": '',
    "account[usr_pinfl]": '',
  })

  function handleForm(e){
    setFormData( prevState => ({...prevState,[e.target.name]: e.target.value}))
  }

  return (
    <div id="buy">
      <div
        className="container newsletter mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row justify-content-center">
          <div className="col-lg-10 border rounded p-1">
            <div className="border rounded text-center p-1">
              <div className="bg-white rounded text-center p-5">
                <h4 className="mb-4">
                  <span className="text-primary text-uppercase">
                    {t(`buy_now`)}
                  </span>
                </h4>
                <form
                  method="POST"
                  action="https://checkout.paycom.uz"
                  className="position-relative mx-auto justify-center"
                  style={{ maxWidth: "400px" }}
                >
                  <input
                    type="hidden"
                    name="merchant"
                    value="64a85e3743c6c1de2db4e6d4"
                  />
                  <input
                    type="hidden"
                    name="amount"
                    value={props.price}
                  />
                  <input
                    className="form-control w-100 py-3 ps-4 pe-5 mb-3"
                    required
                    placeholder={t("your_name")}
                    name="account[usr_name]"
                    value={formData['account[usr_name]']}
                    onChange={handleForm}
                  />
                  <input
                    className="form-control w-100 py-3 ps-4 pe-5 mb-3"
                    required
                    placeholder={t("your_surname")}
                    name="account[usr_surname]"
                    value={formData['account[usr_surname]']}
                    onChange={handleForm}
                  />
                  <input
                    className="form-control w-100 py-3 ps-4 pe-5 mb-3"
                    required
                    placeholder={t("your_phonenumber")}
                    name="account[usr_phone_number]"
                    value={formData['account[usr_phone_number]']}
                    onChange={handleForm}
                  />
                  <input
                    className="form-control w-100 py-3 ps-4 pe-5 mb-3"
                    required
                    type="email"
                    placeholder={t("your_email")}
                    name="account[usr_email]"
                    value={formData['account[usr_email]']}
                    onChange={handleForm}
                  />
                  <input
                    className="form-control w-100 py-3 ps-4 pe-5 mb-3"
                    required
                    placeholder={t("your_pinfl")}
                    name="account[usr_pinfl]"
                    value={formData['account[usr_pinfl]']}
                    onChange={handleForm}
                  />
                  <div 
                    className="w-100 ps-4 pe-5 mb-3"
                    style={{textAlign: 'left'}} 
                  >
                  {t("price_sum")} : &nbsp;
                  { props.price === 0 ? <SelectBtn /> : props.price }
                  </div>
                  <button
                    type="submit"
                    style={{
                      cursor: props.price === 0 ? "not-allowed" : "pointer",
                      border: "1px solid #ebebeb",
                      borderRadius: "6px",
                      background: "linear-gradient(to top, #f1f2f2, white)",
                      width: "200px",
                      height: "42px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      style={{ width: "160px", height: "20px" }}
                      src={`https://cdn.payme.uz/buttons/button_big_${t("language")}.svg`}
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyForm;
