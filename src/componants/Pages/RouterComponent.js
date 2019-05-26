import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import styled from 'styled-components';

//import routes

import Home from './Home';
import Lifetime from './Stats/Lifetime';
import History from './Stats/History';
import Challenges from './Challenges';
import Store from './Store';

const RouteStyle = styled.div`
  width: 100vw;
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
  id
}) => {
  return (
    <RouteStyle>
      <Switch>
        <Route
          exact
          path="/"
          render={location => (
            <Home fetchData={fetchData} location={location} />
          )}
        />
        <Route
          path="/lifetime"
          render={location =>
            id !== null ? (
              <Lifetime stats={stats} location={location} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/history"
          render={() =>
            id !== null ? <History history={history} /> : <Redirect to="/" />
          }
        />
        <Route
          path="/challenges"
          render={() => <Challenges challenges={challenges} />}
        />
        <Route path="/store" render={() => <Store store={store} />} />
      </Switch>
    </RouteStyle>
  );
};

export default RouterComponent;
