//import React, {useState} from 'react';
//import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import PushNotification from 'react-native-push-notification';  // Add this if you haven't imported it yet
import Rendezvous from '../rendevous';  // Match the actual file name
import CustomCard from './CustomCard';


const HomePage = () => {
  const [buttonText, setButtonText] = useState("SOS");

  // Send local notification for React Native (Android/iOS)
  const sendLocalNotification = () => {
    PushNotification.localNotification({
      message: "My Notification Message",  // (required)
      playSound: true,  // (optional) Default is true
      soundName: "default",  // (optional) Sound to play when the notification is shown
    });
  };

  const button = () => {
    setButtonText("Sending");  // Update the button text

    // Reset the button text after 1 second
    setTimeout(() => {
      setButtonText("SOS");
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={button} style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      <Rendezvous />
      <Text style={styles.text}>Recent Groups</Text>

      <CustomCard 
        title="Japan Trip 2024"
        description="Last active at 2:50pm  3.4 miles away"
        imageSource={{ uri: 'https://media.flytographer.com/uploads/2022/07/Tokyo-photo-spots-photographer-flytographer-8.jpeg' }} 
      />

      <CustomCard 
        title="Tokyo City Vibes"
        description="Last active at 10:36am  1.2 miles away"
        imageSource={{ uri: 'https://i.insider.com/5c002ebcde34c4019c11bd94?width=700' }} 
      />
      
      <StatusBar style="auto" />
    </View>
  );
}
export default HomePage;


  const [buttonText, setButtonText] = useState("SOS");

  const button = () => {
    navigation.navigate('Home'); // Delay for 1 second to simulate loading

    return (
    <View style={styles.container}>
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

  //   const styles = StyleSheet.create({
  //       container: {
  //         flex: 1,
  //         backgroundColor: '#5C9EB7',
  //         justifyContent: 'center',
  //       },
  //       map: {
  //         height: '100%', // Adjust size as needed
  //         width: '100%',
  //       },
  //       text: {
  //         fontSize: 32, // Adjust size as needed
  //         textAlign: 'center', // Center the text
  //         marginTop: 20,
  //         fontWeight: 'bold',
  //         color: '#093048',
  //         //font: 
  //       },
  //       button: {
  //         backgroundColor: '#fc8638',
  //         padding: 10,
  //         borderRadius: 5,
  //         marginTop: 0,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         width: 90,
  //         height: 40,
  //         alignSelf: 'center',
  //         left: 150,
  //       },
  //       buttonText: {
  //         color: '#093048',
  //         fontWeight: 'bold',
  //         fontSize: 15,
  //         textAlign: 'center',
  //       },

  //     container: {
  //       flex: 1,
  //       backgroundColor: '#fff',
  //       justifyContent: 'center',
  //     },
  //     map: {
  //       height: '100%', // Adjust size as needed
  //       width: '100%',
  //     },
  //     text: {
  //       fontSize: 38, // Adjust size as needed
  //       textAlign: 'center', // Center the text
  //       marginTop: 20,
  //     },
  //     button: {
  //       backgroundColor: '#fc8638',
  //       padding: 10,
  //       borderRadius: 5,
  //       marginTop: 0,
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       width: 90,
  //       height: 40,
  //       alignSelf: 'center',
  //       left: 150,
  //     },
  //     buttonText: {
  //       color: '#fff',
  //       fontSize: 15,
  //       textAlign: 'center',
  //     },
  )};
