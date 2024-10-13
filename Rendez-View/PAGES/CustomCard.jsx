import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, Pressable } from 'react-native';

const CustomCard = ({ title, description, imageSource, navigation, page }) => {

  const button = () => {
    // Simulate loading delay before navigating
    setTimeout(() => {
      navigation.navigate(page);
    }, 1000); // 1 second delay
  };

  return (
    <Pressable style={styles.card} onPress={button}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3, // For Android shadow
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  content: {
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default CustomCard;