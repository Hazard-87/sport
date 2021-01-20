import React from 'react';

import menuSvg from '../assets/img/menu.png';
import searchSvg from '../assets/img/search.svg';

function Header({ onVisibleMenu }) {
  return (
    <>
      <header className="header">
        <div className="header__title">РАСПИСАНИЕ МАТЧЕЙ</div>
        <img className="header__menu" src={menuSvg} onClick={onVisibleMenu} />

        <div className="categories">
          <ul className="categories__list">
            <li className="categories__list-item">
              <a className="categories__list-link active" href="#">
                Все
              </a>
            </li>
            <li className="categories__list-item">
              <a className="categories__list-link" href="#">
                Live
              </a>
            </li>
            <li className="categories__list-item">
              <a className="categories__list-link" href="#">
                Результаты
              </a>
            </li>
            <li className="categories__list-item">
              <a className="categories__list-link" href="#">
                Расписание
              </a>
            </li>
            <li className="categories__list-item">
              <a className="categories__list-link" href="#">
                Прогнозы
              </a>
            </li>
          </ul>
        </div>
        <div className="header__right-block">
          <img className="header__search" src={searchSvg} />
          <button className="header__login-btn">Войти</button>
        </div>
      </header>
    </>
  );
}

export default Header;
