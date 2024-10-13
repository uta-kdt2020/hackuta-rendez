import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapPage from './PAGES/mapPage';

export default function App() {
  return (
    <View style={styles.container}>
      <MapPage />
      <Text style={styles.text}>Open via npx expo start while being cd'd into Rendez-View</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    width: '100%',
  },
});

