import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Browse from '../pages/browse';
import PlayList from '../pages/playlist';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/playlists/:id" component={PlayList} />
  </Switch>
);

export default Routes;
