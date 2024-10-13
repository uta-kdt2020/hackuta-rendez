import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomCard = ({ title, description, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
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