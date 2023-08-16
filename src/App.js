import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
function App() {
  return (
    <Router>
      {/* Switch will only render the first route that matches the path. */}
      <Switch>
        <Route path="/" exact> <Users /> </Route>
        <Route path="/places/new" exact> <NewPlace /> </Route>

        {/* if none of the other paths are valid redirect will take you to whatever url youve specified for it. in this case the "/" path  */}
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;
