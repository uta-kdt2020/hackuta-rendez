import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/loginPage';  // Updated import path to match actual file structure
import HomePage from './pages/homePage';    // Updated for consistency (if needed)


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
        
        {/* Define the Home Screen */}
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

