import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useLocation } from '../contexts/LocationContext';
import { useApp } from '@realm/react';

const HomePage = () => {
    const { location, errorMsg } = useLocation();
    const [otherUser, setOtherUser] = useState([]);
    const app = useApp();

    return (
        <View>
          <Text>Your location:</Text>
          {location && (
            <Text>
              Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
            </Text>
          )}
          <Text>Other users:</Text>
          {otherUsers.map((user) => (
            <Text key={user._id.toString()}>
              User {user._id.toString()}: Latitude: {user.location.coordinates[1]}, Longitude: {user.location.coordinates[0]}
            </Text>
          ))}
        </View>
    );
};

export default HomePage;