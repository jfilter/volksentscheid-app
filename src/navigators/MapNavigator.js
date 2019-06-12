import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import React from 'react';

import MapMasterScreen from '../components/map/MapMasterScreen';
import AppOnboarding from '../components/map/AppOnboarding';

const MapNavigator = createStackNavigator({
  MapMaster: {
    screen: MapMasterScreen,
    navigationOptions: {
      title: 'Volksentscheid Transparenz',
    },
  },
  Onboarding: {
    screen: AppOnboarding,
    navigationOptions: {
      header: null,
    },
  },
});

MapNavigator.navigationOptions = ({ navigation }) => {
  if (navigation.state.routes.length === 2) {
    return {
      tabBarVisible: false,
    };
  }

  return {};
};

export default MapNavigator;
