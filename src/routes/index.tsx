import React, {ReactElement} from 'react';
import {Switch} from 'react-router-dom';
import {Home} from '../pages/Home';
import {Route} from './routes';
import {Profile} from '../pages/Profile';
import {SignIn} from '../pages/SignIn';

export function Routes(): ReactElement {
  return (
    <Switch>
      <Route path="/" exact component={Home} isPrivate />
      <Route path="/login" exact component={SignIn} />
      <Route path="/profile" exact component={Profile} isPrivate />
    </Switch>
  );
}
