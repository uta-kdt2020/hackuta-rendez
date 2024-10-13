import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';  // Correct import path for LoginPage
import MapPage from './pages/MapPage';      // Correct import path for MapPage

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Define the Login Screen */}
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{ headerShown: false }}  // Hide the header for cleaner UI
        />
        
        {/* Define the Map Screen */}
        <Stack.Screen 
          name="Map" 
          component={MapPage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
