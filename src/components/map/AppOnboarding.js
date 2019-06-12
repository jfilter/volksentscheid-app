import { Icon, Text, SearchBar } from 'react-native-elements';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-community/async-storage';

const pages = [
  {
    backgroundColor: '#fff',
    image: <Icon name="ballot" />,
    title: 'Onboarding',
    subtitle: 'Done with React Native Onboarding Swiper',
  },
  {
    backgroundColor: '#fff',
    image: <Icon name="ballot" />,
    title: 'Onboarding',
    subtitle: 'Done with React Native Onboarding Swiper',
  },
];

class AppOnboarding extends React.Component {
  done = async () => {
    console.log('done');
    try {
      await AsyncStorage.setItem('@first_time', 'stored value');
      this.props.navigation.navigate('MapMaster');
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return <Onboarding pages={pages} onDone={() => this.done()} />;
  }
}

export default AppOnboarding;
