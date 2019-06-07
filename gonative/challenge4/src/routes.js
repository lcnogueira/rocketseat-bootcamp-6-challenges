import React from 'react';

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from './styles';

import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home: createStackNavigator(
        {
          Home,
          Product,
        },
        {
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} />,
          },
        },
      ),
      Cart: createStackNavigator(
        {
          Cart,
        },
        {
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="shopping-cart" size={24} color={tintColor} />
            ),
          },
        },
      ),
    },
    {
      initialRouteName: 'Home',
      tabBarOptions: {
        showLabel: false,
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.gray,
      },
    },
  ),
);

export default Routes;
