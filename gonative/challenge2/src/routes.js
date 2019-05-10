import { createAppContainer, createStackNavigator } from 'react-navigation';

import Repositories from '~/pages/Repositories';
import Issues from '~/pages/Issues';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Repositories,
      Issues,
    },
    {
      defaultNavigationOptions: {
        headerBackTitle: false,
        headerTitleStyle: {
          flex: 1,
          textAlign: 'center',
        },
      },
    },
  ),
);

export default Routes;
