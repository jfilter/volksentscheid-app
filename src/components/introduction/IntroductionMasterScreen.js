import { ListItem, Text, SearchBar } from 'react-native-elements';
import React from 'react';

import { View } from 'react-native';

import { introduction } from '../../data/transparenz';
import { ScrollView } from 'react-native-gesture-handler';

class IntroductionMasterScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        {introduction.map(x => {
          return (
            <View>
              <Text h2>{x.title}</Text>
              <Text>{x.body}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export default IntroductionMasterScreen;
