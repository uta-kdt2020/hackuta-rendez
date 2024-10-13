//import React, {useState} from 'react-native';
//import { StyleSheet, View, Text, TouchableOpacity, Platform, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import PushNotification from 'react-native-push-notification';  // Add this if you haven't imported it yet
import CustomCard from './CustomCard';

export default function GroupPage() {

    return (

    <View style={styles.container}>

        <Text style={styles.text}>Recent Groups</Text>

        <CustomCard 
        title="Japan Trip 2024"
        description="Last active at 2:50 pm  3.4 miles away"
        imageSource={{ uri: './assets/boy.jpg' }} 
        />
        <CustomCard 
        title="Tokyo City Vibes"
        description="Last active at 10:36 am  1.2 miles away"
        imageSource={{ uri: './assets/girl.jpg' }} 
        />

    
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
        title="Eichelle Turner"
        description="Last Seen 3 Minutes Ago"
        imageSource={{ uri: '../assets/Untitled.png' }} 
        navigation={navigation}
        page="Group"
      />
      
      <StatusBar style="auto" />
    )
    </View>
    )
    };
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

//export default GroupPage;
