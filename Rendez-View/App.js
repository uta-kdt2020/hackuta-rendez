<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
=======
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './PAGES/loginPage';  // Updated import path to match actual file structure
import HomePage from './PAGES/homePage';    // Updated for consistency (if needed)


const Stack = createStackNavigator();
>>>>>>> Stashed changes

export default function App() {
  return (
    <View style={styles.container}>
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
});
