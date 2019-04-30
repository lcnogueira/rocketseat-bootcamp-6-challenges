import React, { Fragment } from 'react';
import { render } from 'react-dom';

import './style.scss';

const App = () => (
  <Fragment>
    <h1>Start</h1>
  </Fragment>
);

render(<App />, document.getElementById('app'));
