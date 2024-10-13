<<<<<<< Updated upstream
=======
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Rendezvous from '../rendevous';  // Match the actual file name
import CustomCard from './CustomCard';

const HomePage = () => {
  return (
  
    <View style={styles.container}>
      <Rendezvous />
      <Text style={styles.text}>Group</Text>
          <CustomCard 
            title="Card Title 1" 
            description="Short description for card 1" 
            imageSource={require('../assets/Untitled.png')} 
          />
          <CustomCard 
            title="Card Title 2" 
            description="Short description for card 2" 
            imageSource={require('../assets/Untitled.png')} 
          />
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
    height: '100%', // Adjust size as needed
    width: '100%',
  },
  text: {
    fontSize: 38, // Adjust size as needed
    textAlign: 'center', // Center the text
    marginTop: 20,
  },
});

export default HomePage;  // Change to default export
>>>>>>> Stashed changes
