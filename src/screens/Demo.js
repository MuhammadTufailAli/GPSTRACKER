import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const googleApiKey = 'AIzaSyCehTiHyabP2UeQKY09u8E18wS3BBc3Bvo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const [state, setState] = React.useState({
    pickupCord: {
      latitude: 33.6844,
      longitude: 73.0479,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCord: {
      latitude: 32.9328,
      longitude: 72.863,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const {pickupCord, dropLocationCord} = state;
  const mapRef = useRef();
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFillObject}
        initialRegion={pickupCord}>
        <Marker coordinate={pickupCord} />
        <Marker coordinate={dropLocationCord} />
        <MapViewDirections
          origin={pickupCord}
          destination={dropLocationCord}
          apikey={googleApiKey}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onReady={result => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 300,
                left: 30,
                top: 100,
              },
            });
          }}
        />
      </MapView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
