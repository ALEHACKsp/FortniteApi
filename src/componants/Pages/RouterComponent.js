import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import styled from 'styled-components';

//import routes

import Home from './Home';
import Lifetime from './stats/Lifetime';
import History from './stats/History';
import CurrentSeason from './stats/currentSeason'
import Challenges from './Challenges';
import GameSettings from './gameSettings';
import News from './in_game_news';

const RouteStyle = styled.div`
  width: 100%;
`;

// export const ProtectedRoute = ({ component: Component, id, ...rest }) => (
//   console.log('id check:', id),
//   (
//     <Route
//       {...rest}
//       render={props =>
//         id ? <Component {...props} /> : <Redirect to="/lifetime" />
//       }
//     />
//   )
// );

const RouterComponent = ({
  fetchData,
  stats,
  history,
  challenges,
  store,
  id,
  news,
  season
}) => {
  return (
    <RouteStyle>
      <Switch>
      <Route
          exact
          path="/"
          render={location => (
            <Home fetchData={fetchData} location={location} news={news} store={store} />
          )}
        />
        <Route
          exact
          path="/home"
          render={location => (
            <Home fetchData={fetchData} location={location} news={news} store={store} />
          )}
        />
        <Route
          path="/lifetime"
          render={location =>
            id !== null ? (
              <Lifetime stats={stats} location={location} />
            ) : (
              <Redirect to="/home" />
            )
          }
        />
        <Route
          path="/history"
          render={() =>
            id !== null ? <History history={history} /> : <Redirect to="/home" />
          }
        />
         <Route
          path="/current"
          render={() =>
            id !== null ? <CurrentSeason season={season} /> : <Redirect to="/hom" />
          }
        />
        <Route
          path="/challenges"
          render={() => <Challenges challenges={challenges} />}
        />
        <Route
          path="/news"
          render={location => (
            <News news={news} location={location}/>
          )}
        />
        <Route path="/gameSettings" render={() => <GameSettings />} />
      </Switch>
    </RouteStyle>
  );
};

export default RouterComponent;
