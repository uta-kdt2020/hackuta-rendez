import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

let initialRegion = {
  latitude: 35.6620,   // San Francisco
  longitude: 139.7038,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const HomePage = () => {
  const [region, setRegion] = useState(initialRegion);

  const onRegionChangeComplete = (region) => {
    console.log('Region changed:', region);
    setRegion(region); // Update the state with the new region
  };

  // TODO: Add SOS button

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion} // Set the initial region
        onRegionChangeComplete={onRegionChangeComplete} // Detect region change completion
      />
      <Text style={styles.text}>Group</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  map: {
    height: '80%', // Adjust size as needed
    width: '100%',
  },
  text: {
    fontSize: 38, // Adjust size as needed
    textAlign: 'center', // Center the text
    marginTop: 20,
  },
});

export default HomePage;  // Change to default export
