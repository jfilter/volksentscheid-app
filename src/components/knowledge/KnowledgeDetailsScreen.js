import React from 'react';

import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';

class KnowledgeDetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'NO-ID');
    const image = navigation.getParam('image', 'some default value');
    const body = navigation.getParam('body', 'some default value');
    return (
      <ScrollView>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{
            uri: image,
          }}
        />
        <Text h2>{title}</Text>
        <Text>{body}</Text>
      </ScrollView>
    );
  }
}

export default KnowledgeDetailsScreen;
