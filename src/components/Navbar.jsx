import React from 'react';

import toggleSvg from '../assets/img/toggle.svg';
import closeSvg from '../assets/img/close.svg';

function Navbar({ visible, league, onVisible, country }) {
  return (
    <>
      <div className="navbar">
        <div className="navbar-top">
          <div className="navbar-top__title">Мои лиги</div>
          <div className="navbar-lists">
            {league.map((l, index) => (
              <div className="nav-list">
                <div className="nav-list__item">
                  <div className="nav-list__title">{l.league}</div>
                  <img
                    className={visible === index ? 'nav-list__toggle active' : 'nav-list__toggle'}
                    src={toggleSvg}
                    onClick={() => onVisible(index)}
                  />
                </div>
                <div className={visible === index ? 'nav-ligue' : 'nav-ligue hidden'}>
                  {l.items.map((i) => (
                    <div
                      className={visible === index ? 'nav-ligue__list' : 'nav-ligue__list hidden'}>
                      <div className="nav-ligue__title">{i.item}</div>
                      <img className="nav-ligue__close" src={closeSvg} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="navbar-footer">
          <div className="navbar-footer__title">Страны</div>
          <div className="navbar-footer-lists">
            <div className="nav-footer-list">
              {country.map((obj, index) => (
                <div className="nav-footer-list__item" key={index}>
                  <div className="nav-footer-list__title">{obj.country}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
