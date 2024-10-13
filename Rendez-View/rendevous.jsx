import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 

const initialRegion = {
  latitude: 35.6620,
  longitude: 139.7038,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const Rendezvous = () => {
    console.log("Rendezvous component rendered");
    const [region, setRegion] = useState(initialRegion);
    const [rendezvousPoint, setRendezvousPoint] = useState(null);

    const onRegionChange = (newRegion) => {
        setRegion(newRegion);
    };

    const createRendezvous = (event) => {
        const { coordinate } = event.nativeEvent;
        console.log("Coordinate debug", coordinate);

        const newRendezvous = {
            id: Date.now(),
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
        };
        console.log("New rendezvous point is: ", newRendezvous);

        setRendezvousPoint(newRendezvous);

        console.log("A new rendezvous point has been set at: ", newRendezvous);
    };

    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map} 
                initialRegion={initialRegion} 
                onRegionChange={onRegionChange}
                onLongPress={createRendezvous}
            >
                {rendezvousPoint && (
                    <Marker
                        key={rendezvousPoint.id}
                        coordinate={{
                            latitude: rendezvousPoint.latitude,
                            longitude: rendezvousPoint.longitude,
                        }}
                        title="Rendezvous Point"
                    />
                )}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default Rendezvous;
