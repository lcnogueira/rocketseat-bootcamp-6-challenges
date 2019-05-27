import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Sidebar />
    </Fragment>
  );
}

export default App;
