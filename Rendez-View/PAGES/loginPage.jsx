import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const LoginPage = ({ navigation }) => {
    const [buttonText, setButtonText] = useState("Get Started_");
    
    const button = () => {
        setButtonText("Please Wait_");
        // Navigate to HomePage after setting the text
        setTimeout(() => {
            navigation.navigate('Home');
        }, 1000);  // Delay for 1 second to simulate loading
        
        setTimeout(() => {
          setButtonText("Get Started_");
      }, 1000);
    };

    return (
      <View style={styles.container}>
          {/* Logo */}
          <Image 
              source={require('../assets/Untitled.png')} // Replace with your logo URL or local asset
              style={styles.logo} 
          />
          {/* Title */}
          <Text style={styles.title}>RendezView</Text>
          <Text style={styles.subtitle}>Safe, Convienent, Private</Text>
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
},
title: {
  fontSize: 50, // Title font size
  fontWeight: 'bold', // Bold font style
  marginBottom: 0, // Space between the title and button
},
button: {
  backgroundColor: '#007BFF',
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

export default LoginPage;