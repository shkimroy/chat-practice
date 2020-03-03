import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home"
import Lobby from '../Lobby';
import ChatRoom from '../ChatRoom';

const App = props =>
  props.user.isLoggedIn ? <PrivateRoutes key={1} /> : <PublicRoutes key={1} />;

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" component={Lobby} />
    <Route path="/room/:id" component={ChatRoom} />
  </Switch>
)

export default App;