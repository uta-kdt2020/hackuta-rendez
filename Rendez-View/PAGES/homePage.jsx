import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import PushNotification from 'react-native-push-notification';  // Add this if you haven't imported it yet
import Rendezvous from '../rendevous';  // Match the actual file name
import CustomCard from './CustomCard';

const HomePage = ({ navigation }) => {

  const [buttonText, setButtonText] = useState("SOS");

  const sos = () => {
    navigation.navigate('Sos');
  }

  const button = () => {
    navigation.navigate('Home'); // Delay for 1 second to simulate loading
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={sos} style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      <Rendezvous />
      <Text style={styles.text}>GroupID: ABCD</Text>

      <CustomCard 
        title="Shibuya Crossing"
        description="RDV at 6:00pm at Pin"
        imageSource={{ uri: '../assets/Untitled.png' }} 
        navigation={navigation}
        page="Group"
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
  button: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 40,
    alignSelf: 'center',
    left: 150,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default HomePage;
