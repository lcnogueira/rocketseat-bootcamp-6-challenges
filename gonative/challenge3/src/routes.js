import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Map from './pages/Map';

const Routes = createAppContainer(
  createSwitchNavigator({
    Map,
    Login,
  }),
);

export default Routes;
