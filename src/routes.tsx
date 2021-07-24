import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/UserProfile/UserProfile';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/profile/:id"
        exact
        render={({ match }) => <Profile userId={match.params.id} />}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
