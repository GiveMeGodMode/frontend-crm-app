import React, { useState, useEffect } from "react";

const gifts = [
    { title: "Виджеты", discription: "30 готовых решений" },
    { title: "Dashboard", discription: "с показателями вашего бизнеса" },
    { title: "Skype Аудит", discription: "отдела продаж и CRM системы" },
    { title: "35 дней", discription: "использования CRM" },
];

const giftsMob = [
    { title: "Skype Аудит" },
    { title: "30 виджетов" },
    { title: "Dashboard" },
    { title: "Месяц аmoCRM" },
];

function Main(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function updateWindowSize() {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateWindowSize);

        return () => window.removeEventListener("resize", updateWindowSize);
    });

    return (
        <section className="content">
            <section className="content__item">
                <h2 className="content__title-main">
                    Зарабатывайте больше <span>с WELBEX</span>
                </h2>
                <p className="content__discription">
                    Развиваем и контролируем продажи за вас
                </p>
            </section>
            <section className="content__item">
                <h4 className="content__title">
                    Вместе с <span>бесплатной</span> <span>консультацией</span> мы дарим:
                </h4>
                <ul className="content__list">
                    {windowWidth > 425
                        ? gifts.map(({ title, discription }, index) => (
                            <li className="content__list-item" key={index}>
                                <h4 className="content__list-title">{title}</h4>
                                <p className="content__list-discription">{discription}</p>
                            </li>
                        ))
                        : giftsMob.map(({ title }, index) => (
                            <li className="content__list-item" key={index}>
                                <h4 className="content__list-title">
                                    <span>&#8212;</span>
                                    {title}
                                </h4>
                            </li>
                        ))}
                </ul>
                <button className="content__button">Получить консультацию</button>
            </section>
        </section>
    );
}

export default Main;
