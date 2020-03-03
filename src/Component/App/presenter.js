import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home"

const App = props => [
  <PublicRoutes key={1} />
]

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App;