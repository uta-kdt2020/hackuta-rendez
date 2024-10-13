import React from 'react';
import { StyleSheet, View } from 'react-native';
import Rendezvous from '../rendevous';

export default function MapPage() {
  return (
    <View style={styles.container}>
      <Rendezvous />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
