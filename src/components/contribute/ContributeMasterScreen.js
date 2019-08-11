import React from 'react';

import { FlatList, View, Linking } from 'react-native';
import { ListItem, Text, SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class ContributeScreen extends React.Component {
  state = {
    list: [
      {
        title: 'zum E-Mail-Newsletter anmelden',
        url:
          'https://volksentscheid-transparenz.us5.list-manage.com/subscribe?u=929f1e07936386d34833e20d1&id=09be3d520c',
      },
      {
        title: 'auf Twitter folgen',
        url: 'https://twitter.com/TransparenzBER',
      },
      {
        title: 'auf Facebook liken',
        url: 'https://www.facebook.com/TransparenzBER/',
      },
      {
        title: 'auf Instagram folgen',
        url: 'https://www.instagram.com/transparenzber/',
      },
      {
        title: '10 Freunden von dem Volksentscheid erzählen',
      },
      {
        title: 'selbst Unterschreiben',
        url: 'https://volksentscheid-transparenz.de/mitmachen/',
      },
      {
        title: 'eine Unterschriftenliste auslegen',
        url: 'https://volksentscheid-transparenz.de/mitmachen/',
      },
      {
        title: 'eine volle Unterschriftenliste an uns schicken',
        url: 'https://volksentscheid-transparenz.de/mitmachen/',
      },
    ],
    done: [],
  };

  keyExtractor = (item, index) => index.toString();

  renderItemToDo = ({ item }) => (
    <ListItem
      title={item.title}
      leftIcon={{ name: 'radio-button-unchecked' }}
      onPress={() => {
        this.setState({ done: [...this.state.done, item.title] });
        item.url != null && Linking.openURL(item.url);
      }}
    />
  );

  renderItemDone = ({ item }) => (
    <ListItem
      title={item.title}
      leftIcon={{ name: 'check-circle' }}
      onPress={() =>
        this.setState({ done: this.state.done.filter(x => x !== item.title) })
      }
    />
  );

  render() {
    return (
      <ScrollView contentContainerStyle={{ margin: 20, paddingBottom: 100 }}>
        <Text h2>Offen</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.list.filter(x => !this.state.done.includes(x.title))}
          renderItem={this.renderItemToDo}
        />
        <Text h2>Erledigt</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.list.filter(x => this.state.done.includes(x.title))}
          renderItem={this.renderItemDone}
        />
      </ScrollView>
    );
  }
}

export default ContributeScreen;
