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
      <ScrollView contentContainerStyle={{ margin: 20, paddingBottom: 500 }}>
        {(
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{
              uri: image,
            }}
          />
        ) && image != null}
        <Text style={{ marginVertical: 20 }} h2>
          {title}
        </Text>
        <Text style={{ lineHeight: 20 }}>{body}</Text>
      </ScrollView>
    );
  }
}

export default KnowledgeDetailsScreen;
