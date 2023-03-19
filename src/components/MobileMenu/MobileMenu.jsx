import React from "react";
import { Link } from "react-router-dom";

const menuLinks = [
  { title: "Услуги", link: "/services" },
  { title: "Виджеты", link: "/widgets" },
  { title: "Интеграции", link: "/integrations" },
  { title: "Кейсы", link: "/cases" },
];

function MobileMenu(props) {
  return (
    <nav className="mob-menu">
      <ul className="mob-menu__list">
        {menuLinks.map(({ title, link }, index) => (
          <li className="mob-menu__item" key={index}>
            <Link to={link} className="mob-menu__link">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileMenu;
