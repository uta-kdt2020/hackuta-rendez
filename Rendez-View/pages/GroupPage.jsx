import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import PushNotification from 'react-native-push-notification';  // Add this if you haven't imported it yet
import CustomCard from './CustomCard';

const GroupPage = ( {navigation} ) => {

  // Send local notification for React Native (Android/iOS)
  // const sendLocalNotification = () => {
  //   PushNotification.localNotification({
  //     message: "My Notification Message",  // (required)
  //     playSound: true,  // (optional) Default is true
  //     soundName: "default",  // (optional) Sound to play when the notification is shown
  //   });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Group</Text>

      <CustomCard 
        title="Rudy Orozco"
        description="Last Seen At 2:00pm"
        imageSource={{ uri: '../assets/Untitled.png' }}
        navigation={navigation}
        page="Group"
      />
      <CustomCard 
        title="Denzel Tarry"
        description="Last Seen At 1:00pm"
        imageSource={{ uri: '../assets/Untitled.png' }} 
        navigation={navigation}
        page="Group"
      />
      <CustomCard 
        title="Khoi Fish"
        description="Currently Live"
        imageSource={{ uri: '../assets/Untitled.png' }} 
        navigation={navigation}
        page="Group"
      />
      <CustomCard 
        title="Ei Chelle"
        description="Last Seen 3 Minutes Ago"
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
    backgroundColor: '#fc8638',
    padding: 10,
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

export default GroupPage;
