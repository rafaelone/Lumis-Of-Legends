import React, {ReactElement} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from '../pages/Home';
import {Profile} from '../pages/Profile';
import {SignIn} from '../pages/SignIn';

export function Routes(): ReactElement {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={SignIn} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  );
}
