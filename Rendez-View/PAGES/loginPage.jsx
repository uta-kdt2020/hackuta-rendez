import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground  } from 'react-native';
import React, { useState } from 'react';

const LoginPage = ({ navigation }) => {
    const [buttonText, setButtonText] = useState("Get Started_");
    
    const button = () => {
        setButtonText("Please Wait_"); // Navigate to HomePage after setting the text
        
        setTimeout(() => {
            navigation.navigate('Home'); // Delay for 1 second to simulate loading
        }, 1000);  
        
        setTimeout(() => {
          setButtonText("Get Started_");
      }, 1000);
    };

    return (
      <View style={styles.container}>
          <ImageBackground source={require('../assets/tokoBG.jpg')} style={styles.image} blurRadius={4}>
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
          </ImageBackground>
          {/* Logo */}
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
  color: '#fff', // Subtitle text color
  marginBottom: 50// Space between the subtitle and button
},
title: {
  fontSize: 50, // Title font size
  fontWeight: 'bold', // Bold font style
  marginBottom: 0,
  color: '#fff', // Space between the title and button
  font: '../assets/fonts/ALBAM___.TTF'
},
button: {
  backgroundColor: '#F2AC57',
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
  color: '#093048',
  fontSize: 30,
  textAlign: 'center',
},
image: {
  width: 499,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',  
},
});

export default LoginPage;