import React from 'react';

import { FlatList, View } from 'react-native';
import { ListItem, Text, SearchBar } from 'react-native-elements';

class ContributeScreen extends React.Component {
  state = {
    list: [
      {
        title: 'E-Mail-Newsletter',
      },
      {
        title: '10 Freunden bescheid geben',
      },
      {
        title: 'Unterschreiben',
      },
      {
        title: 'Liste auslegen',
      },
    ],
    done: [],
  };

  keyExtractor = (item, index) => index.toString();

  renderItemToDo = ({ item }) => (
    <ListItem
      title={item.title}
      leftIcon={{ name: 'radio-button-unchecked' }}
      onPress={() => this.setState({ done: [...this.state.done, item.title] })}
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
      <View>
        <Text h2>ToDo</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.list.filter(x => !this.state.done.includes(x.title))}
          renderItem={this.renderItemToDo}
        />
        <Text h2>Done</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.list.filter(x => this.state.done.includes(x.title))}
          renderItem={this.renderItemDone}
        />
      </View>
    );
  }
}

export default ContributeScreen;
