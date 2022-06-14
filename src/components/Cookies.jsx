import React, { useState } from "react";
import Modal from "./Modal";
import PrivacyPolicy from "./PrivacyPolicy";

const Cookies = ({ english, setEnglish }) => {
  const [openModal, setOpenModal] = useState(true);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  return (
    <div className={openModal ? "cookies" : "no-cookies"}>
      <Modal open={openModal} english={english} setEnglish={setEnglish} />
      {openPrivacy ? (
        <PrivacyPolicy
          setOpenPrivacy={setOpenPrivacy}
          openPrivacy={openPrivacy}
          english={english}
          setEnglish={setEnglish}
        />
      ) : (
        ""
      )}

      <div className="cookies__bar">
        <p className="cookies__info">
          {!english
            ? "Strona karieratp.pl wykorzystuje cookies. Korzystając z niej, akceptujesz naszą politykę prywatności."
            : "This website karieratp.pl uses cookies. By using it, you accept our privacy policy."}
        </p>
        <div className="cookies__buttons">
          <button className="accept" onClick={() => setOpenModal(false)}>
            {!english ? "Akceptuj" : "Accept"}
          </button>
          <button className="privacy" onClick={() => setOpenPrivacy(true)}>
            {!english
              ? "Przejdź do Polityki Prywatności"
              : "Go to Privacy Policy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
