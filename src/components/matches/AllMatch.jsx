import React from 'react'

import starSvg from '../../assets/img/star.svg'
import starSvg2 from '../../assets/img/star2.svg'
import flagSvg from '../../assets/img/flag.svg'

function AllMatch({ state, arr }) {
  return (
    <>
      {arr.map((a, index) => {
        return (
          <div key={a.id}>
            {state.find((s) => s.league_id === a.id) && (
              <div className="block" key={a.id + index}>
                <div className="block-top">
                  <img className="block-top__flag" src={flagSvg} />
                  <div className="block-top__title">{a.item}</div>
                </div>
                {state.map((s, index) => {
                  let timer = s.time.split(' ')[1].split(':')

                  return (
                    <div key={s.id}>
                      {a.id === s.league_id && (
                        <div className="block-footer" key={s.id + index}>
                          <div className="block-footer__time">{`${timer[0]}:${timer[1]}`}</div>
                          <a className="block-footer__commands" href="#">
                            {s.name}
                          </a>
                          <a className="block-footer__score" href="#">
                            {s.score}
                          </a>
                          <img
                            className="block-footer__favorites"
                            src={s.favorite ? starSvg2 : starSvg}
                          />
                          <div className="block-footer__status">{s.status}</div>
                          <a className="block-footer__detail" href={s.link}>
                            Подробнее
                          </a>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

export default AllMatch
