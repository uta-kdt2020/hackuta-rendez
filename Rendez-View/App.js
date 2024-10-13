import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

let initialRegion = {
  latitude: 37.7749,   // San Francisco
  longitude: -122.4194,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function App() {
  const [region, setRegion] = useState(initialRegion);

  const onRegionChange = (region) => {
    console.log('Region changed:', region);
    setRegion(region); // Update the state with the new region
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion} // Set the initial region
        onRegionChange={onRegionChange} // Detect region change
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '80%', // Adjust size as needed
    width: '100%',
  },
});
