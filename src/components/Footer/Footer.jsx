import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../Contacts/Contacts";

const aboutCompany = {
  title: "О компании",
  titlesLinks: ["Партнёрская программа", "Вакансии"],
};

const menuLinks = {
  title: "Меню",
  titlesLinks: [
    "Расчёт стоимости",
    "Благодарственность клиентов",
    "Услуги",
    "Кейсы",
    "Виджеты",
    "Сертификаты",
    "Интеграции",
    "Блог на Youtube",
    "Наши клиенты",
    "Вопрос / Ответ",
  ],
};

function Footer(props) {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <h5 className="footer__title">{aboutCompany.title}</h5>
        <ul className="footer__list">
          {aboutCompany.titlesLinks.map((title, index) => (
            <li className="footer__item" key={index}>
              <Link to="/" className="footer__link">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="footer__nav">
        <h5 className="footer__title">{menuLinks.title}</h5>
        <ul className="footer__list">
          {menuLinks.titlesLinks.map((title, index) => (
            <li className="footer__item" key={index}>
              <Link to="/" className="footer__link">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer__contacts">
        <h5 className="footer__title">Контакты</h5>
        <Contacts modification="bottom" />
        <p className="footer__copyright">
          &#169;WELBEX 2022. Все права защищены.
        </p>
        <p className="footer__copyright-link">Политика конфиденциальности</p>
      </div>
    </footer>
  );
}

export default Footer;
