import { ListItem, Text, SearchBar } from 'react-native-elements';
import React from 'react';
import { FlatList, View } from 'react-native';

import { knowledge } from '../../data/transparenz';
import { ScrollView } from 'react-native-gesture-handler';

class KnowledgeMasterScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item: { title, image, body } }) => (
    <ListItem
      title={title}
      leftAvatar={{ source: { uri: image } }}
      onPress={() =>
        this.props.navigation.navigate('KnowledgeDetails', {
          title,
          image,
          body,
        })
      }
    />
  );

  renderItemSearch = ({ item: { title, image, body } }) => {
    const index = body.indexOf(this.state.search);
    let subtitle = body;
    if (index !== -1) {
      const startIndex = Math.max(0, index - 20);
      subtitle = subtitle.slice(startIndex, startIndex + 100);
    } else {
      subtitle = subtitle.slice(0, 100);
    }
    subtitle = subtitle.replace(
      this.state.search,
      '__' + this.state.search + '__'
    );
    let titlePrint = title.replace(
      this.state.search,
      '__' + this.state.search + '__'
    );
    return (
      <ListItem
        title={titlePrint}
        subtitle={subtitle}
        leftAvatar={{ source: { uri: image } }}
        onPress={() =>
          this.props.navigation.navigate('KnowledgeDetails', {
            title,
            image,
            body,
          })
        }
      />
    );
  };

  render() {
    const { search } = this.state;
    return (
      <ScrollView>
        <SearchBar
          lightTheme
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        {search === '' &&
          knowledge.map(({ sectionTitle, sectionParts }) => (
            <View>
              <Text h2>{sectionTitle}</Text>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={sectionParts}
                renderItem={this.renderItem}
              />
            </View>
          ))}
        {search !== '' &&
          knowledge.map(({ sectionTitle, sectionParts }) => (
            <View>
              <Text h2>{sectionTitle}</Text>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={sectionParts.filter(
                  x => x.title.includes(search) || x.body.includes(search)
                )}
                renderItem={this.renderItemSearch}
              />
            </View>
          ))}
      </ScrollView>
    );
  }
}

export default KnowledgeMasterScreen;
