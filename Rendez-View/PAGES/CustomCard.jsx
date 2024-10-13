import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CustomCard = ({ title, description, imageSource }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    margin: 10,
    overflow: 'hidden' 
  },
  image: {
    height: 200,
    width: '100%'
  },
  textContainer: {
    padding: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: 'gray'
  }
});

export default CustomCard;