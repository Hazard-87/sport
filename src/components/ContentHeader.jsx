import React from 'react'
import { Link } from 'react-router-dom'

import dateSvg from '../assets/img/date.svg'

function ContentHeader({ onSelectItem, active, future, today, state, date, day }) {
  const items = [
    {
      id: 1,
      name: 'Сегодня',
      count: today.length,
      url: '/',
    },
    {
      id: 2,
      name: 'Завтра',
      count: future.length,
      url: '/future',
    },
    {
      id: 3,
      name: 'Все матч',
      count: state.length,
      url: '/all',
    },
  ]

  return (
    <>
      <div className="content-top">
        <div className="content-top__lists">
          {items.map((item, index) => (
            <Link
              className={
                item.url === window.location.pathname
                  ? `content-top__link active`
                  : 'content-top__link'
              }
              to={item.url}
              onClick={() => onSelectItem(index)}
              key={item.id}>
              {item.name} <span>{item.count}</span>
            </Link>
          ))}

          {/* <Link
            className={active === 1 ? `content-top__link active` : 'content-top__link'}
            to="/"
            onClick={() => onSelectItem(1)}>
            Сегодня <span>{today.length}</span>
          </Link>
          <Link
            className={active === 2 ? `content-top__link active` : 'content-top__link'}
            to="/future"
            onClick={() => onSelectItem(2)}>
            Завтра <span>{future.length}</span>
          </Link>
          <Link
            className={active === 3 ? `content-top__link active` : 'content-top__link'}
            to="/all"
            onClick={() => onSelectItem(3)}>
            Все матчи <span>{state.length}</span>
          </Link> */}
        </div>
        <div className="content-top__date">
          <img className="content-top__date-img" src={dateSvg} />
          <div className="content-top__date-text">
            {date.getDate()}.{date.getMonth() + 1} {day[date.getDay()]}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentHeader
