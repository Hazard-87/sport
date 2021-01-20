import React from 'react';

import menuCloseSvg from '../assets/img/menuClose.svg';

function Menu({ visibleMenu, onVisibleMenu }) {
  return (
    <>
      <div className={visibleMenu ? 'menu-popup' : 'menu-popup hidden'}>
        <div className="menu-popup__block">
          <div className="menu-popup__title">Меню</div>
          <img className="menu-popup__close" src={menuCloseSvg} onClick={onVisibleMenu} />
        </div>
        <div className="menu-popup-lists ">
          <div className="menu-list">
            <div className="menu-list__item">
              <div className="menu-list__title">LIVE</div>
            </div>
            <div className="menu-list__item">
              <div className="menu-list__title">Результаты</div>
            </div>
            <div className="menu-list__item">
              <div className="menu-list__title">Расписание</div>
            </div>
            <div className="menu-list__item">
              <div className="menu-list__title">Прогнозы</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
