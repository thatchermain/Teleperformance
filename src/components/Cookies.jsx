import React, { useState } from "react";
import Modal from "./Modal";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiesPl from "../assets/cookiesPl.pdf";
import CookiesEn from "../assets/cookiesEn.pdf";
import TermsFilePl from "../assets/termsOfUsePl.pdf";
import TermsFileEn from "../assets/termsOfUseEn.pdf";

const Cookies = ({ english, setEnglish }) => {
  const [openModal, setOpenModal] = useState(true);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  return (
    <div className={openModal ? "cookies" : "no-cookies"}>
      {/* <Modal open={openModal} english={english} setEnglish={setEnglish} />
      {openPrivacy ? (
        <PrivacyPolicy
          setOpenPrivacy={setOpenPrivacy}
          openPrivacy={openPrivacy}
          english={english}
          setEnglish={setEnglish}
        />
      ) : (
        ""
      )} */}

      <div className="cookies__bar">
        <p className="cookies__info">
          {!english ? (
            <p>
              Strona karieratp.pl wykorzystuje {""}
              <a
                href={CookiesPl}
                className="cookies__link"
                target="_blank"
                rel="noreferrer"
                download
              >
                cookies.
              </a>{" "}
              Korzystając z niej, akceptujesz naszą politykę prywatności.
            </p>
          ) : (
            <p>
              This website karieratp.pl uses {""}
              <a
                href={CookiesEn}
                className="cookies__link"
                target="_blank"
                rel="noreferrer"
                download
              >
                cookies.
              </a>{" "}
              By using it, you accept our privacy policy.
            </p>
          )}
        </p>
        <div className="cookies__buttons">
          <button className="accept" onClick={() => setOpenModal(false)}>
            {!english ? "Akceptuj" : "Accept"}
          </button>
          <a
            href={!english ? `${TermsFilePl}` : `${TermsFileEn}`}
            target="_blank"
            rel="noreferrer"
            download
          >
            <button className="privacy" onClick={() => setOpenPrivacy(true)}>
              {!english
                ? "Przejdź do Polityki Prywatności"
                : "Go to Privacy Policy"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
