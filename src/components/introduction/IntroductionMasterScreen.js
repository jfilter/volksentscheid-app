import { ListItem, Text, SearchBar } from 'react-native-elements';
import React from 'react';

import { View, Image, Linking } from 'react-native';

import { introduction, homepage } from '../../data/transparenz';
import { ScrollView } from 'react-native-gesture-handler';

class IntroductionMasterScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ margin: 20, paddingBottom: 100 }}>
        {introduction.map(x => {
          return (
            <View
              style={{
                marginBottom: 40,
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <Image
                style={{ width: 200, height: 200, marginBottom: 20 }}
                source={{
                  uri: x.image,
                }}
              />
              <Text h2>{x.title}</Text>
              <View style={{ marginBottom: 20 }}></View>
              <Text style={{ lineHeight: 20 }}>{x.body}</Text>
            </View>
          );
        })}
        <Text
          style={{ color: 'blue' }}
          onPress={() => Linking.openURL(homepage)}
        >
          Mehr Informationen auf unserer Webseite.
        </Text>
      </ScrollView>
    );
  }
}

export default IntroductionMasterScreen;
