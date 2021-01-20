import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchItems } from './redux/actions/index';

import Today from './components/matches/Today';
import Future from './components/matches/Future';
import AllMatch from './components/matches/AllMatch';
import Menu from './components/Menu';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ContentHeader from './components/ContentHeader';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((data) => data.items);
  const league = useSelector((data) => data.leagues);
  const country = useSelector((data) => data.country);

  const [active, setActive] = React.useState(1);
  const [visible, setVisible] = React.useState(null);
  const [visibleMenu, setVisibleMenu] = React.useState(false);

  const arr = [];
  const items = league.map((item) => item.items);
  items.forEach(function (item) {
    arr.push(...item);
  });

  const date = new Date();
  const day = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const g = [date.getUTCDate()];

  const today = state.filter((item) => item.time.split(' ')[0].split('-')[2] == g[0]);
  const future = state.filter((item) => item.time.split(' ')[0].split('-')[2] == g[0] + 1);

  React.useEffect(async () => {
    dispatch(fetchItems());
  }, []);

  const onSelectItem = (item) => {
    setActive(item);
  };

  const onVisible = (index) => {
    if (index === visible) {
      setVisible(null);
    } else {
      setVisible(index);
    }
  };

  const onVisibleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        <Menu visibleMenu={visibleMenu} onVisibleMenu={onVisibleMenu} />
        <Header onVisibleMenu={onVisibleMenu} />
        <div className="wrapper">
          <Navbar visible={visible} league={league} onVisible={onVisible} country={country} />
          <div className="content-wrapper">
            <ContentHeader
              onSelectItem={onSelectItem}
              active={active}
              future={future}
              today={today}
              state={state}
              date={date}
              day={day}
            />
            <div className="content">
              <Route exact path="/" render={() => <Today arr={arr} g={g} today={today} />} />
              <Route
                exact
                path="/future"
                render={() => <Future arr={arr} g={g} future={future} />}
              />
              <Route exact path="/all" render={() => <AllMatch arr={arr} state={state} />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
