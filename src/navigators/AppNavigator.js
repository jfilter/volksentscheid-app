import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import React from 'react';

import KnowledgeNavigator from './KnowledgeNavigator';
import ContributeNavigator from './ContributeNavigator';
import MapNavigator from './MapNavigator';
import IntroductionNavigator from './IntroductionNavigator';

const TabNavigator = createBottomTabNavigator({
  Map: {
    screen: MapNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon size={24} color={tintColor} name="map" type="ionicons" />
      ),
    },
  },
  Introduction: {
    screen: IntroductionNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon size={24} color={tintColor} name="info" type="ionicons" />
      ),
    },
  },
  Knowledge: {
    screen: KnowledgeNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon size={24} color={tintColor} name="book" type="ionicons" />
      ),
    },
  },
  Contribute: {
    screen: ContributeNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon size={24} color={tintColor} name="people" type="ionicons" />
      ),
    },
  },
});

export default createAppContainer(TabNavigator);
