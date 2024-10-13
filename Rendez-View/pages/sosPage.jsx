import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const SosPage = ( { navigation } ) => {
    const [buttonText, setButtonText] = useState("OK!");
    
    const button = () => {
        navigation.navigate('Home'); // Delay for 1 second to simulate loading 
    };

    return (
      <View style={styles.container}>
          {/* Logo */}
          <Image 
              source={require('../assets/sos.png')} // Replace with your logo URL or local asset
              style={styles.logo} 
          />
          {/* Title */}
          <Text style={styles.title}>SOS</Text>
          <Text style={styles.subtitle}>Your friends have been alerted.If in danger, contact emergency services.</Text>
          <TouchableOpacity onPress={button} style={styles.button}>
              <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
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
logo: {
  width: 300,  // Adjust the width as needed
  height: 300, // Adjust the height as needed
  marginBottom: 0, // Space between the logo and title
},
subtitle: {
  fontSize: 20, // Subtitle font size
  color: '#666', // Subtitle text color
  marginBottom: 20, // Space between the subtitle and button
  textAlign: 'center',
},
title: {
  fontSize: 50, // Title font size
  fontWeight: 'bold', // Bold font style
  marginBottom: 0, // Space between the title and button
},
button: {
  backgroundColor: 'red',
  padding: 10,
  borderRadius: 5,
  marginTop: 0,
  justifyContent: 'center',  
  alignItems: 'center',   
  width: 300,
  height: 100,
  alignSelf: 'center',
},
buttonText: {
  color: '#fff',
  fontSize: 30,
  textAlign: 'center',
},
});

export default SosPage;