import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}
