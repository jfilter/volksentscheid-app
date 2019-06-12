import React from 'react';

import { FlatList, View } from 'react-native';
import { ListItem, Text, SearchBar } from 'react-native-elements';

class ContributeScreen extends React.Component {
  state = {
    todo: [
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
    />
  );

  render() {
    return (
      <View>
        <Text h2>ToDo</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.todo}
          renderItem={this.renderItemToDo}
        />
        <Text h2>Done</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.done}
          renderItem={this.renderItemDone}
        />
      </View>
    );
  }
}

export default ContributeScreen;
