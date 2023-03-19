import React from "react";
import telegram from "../../assets/img/telegram.svg";
import viber from "../../assets/img/viber.svg";
import whatsapp from "../../assets/img/whatsapp.svg";

function Contacts({ modification = "" }) {
  return (
    <>
      <ul className={`contacts contacts_${modification}`}>
        <li className="contacts__item">
          <p className="contacts__text">+7 555 555-55-55</p>
        </li>
        <div className={`contacts__social contacts__social_${modification}`}>
          <li className="contacts__item">
            <img className="contacts__image" alt="Логотип" src={telegram} />
          </li>
          <li className="contacts__item">
            <img className="contacts__image" alt="Логотип" src={viber} />
          </li>
          <li className="contacts__item">
            <img className="contacts__image" alt="Логотип" src={whatsapp} />
          </li>
        </div>
        <li className="contacts__item">
          <p className="contacts__text">Москва, Путевой проезд 3с1, к 902</p>
        </li>
      </ul>
    </>
  );
}

export default Contacts;
