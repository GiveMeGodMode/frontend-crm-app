import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Contacts from "../Contacts/Contacts";

const menuLinks = [
  { title: "Услуги", link: "/services" },
  { title: "Виджеты", link: "/widgets" },
  { title: "Интеграции", link: "/integrations" },
  { title: "Кейсы", link: "/cases" },
  { title: "Сертификаты", link: "/certificates" },
];

function Menu(props) {
  return (
    <nav className="menu">
      <Logo />
      <ul className="menu__list">
        {menuLinks.map(({ title, link }, index) => (
          <li className="menu__item" key={index}>
            <Link to={link} className="menu__link">
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Contacts modification="top" />
    </nav>
  );
}

export default Menu;
