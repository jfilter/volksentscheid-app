import React from 'react';

import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class MapMasterScreen extends React.Component {
  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('@first_time');
      console.log(value);
      if (value === null) {
        this.props.navigation.navigate('Onboarding');
      }
    } catch (e) {
      console.error(e);
    }
  }

  state = {
    markers: [
      {
        coordinate: {
          latitude: 52.520008,
          longitude: 13.404954,
        },
        title: 'center of Berlin',
        description: 'this is the center of Berlin',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 52.520008,
            longitude: 13.404954,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          {this.state.markers.map(marker => (
            <Marker
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapMasterScreen;
