import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 

const initialRegion = {
  latitude: 35.6620,
  longitude: 139.7038,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

const people = [
    {
      name: "Alice",
      location: {
        latitude: 35.6895,  // Tokyo
        longitude: 139.6917
      }
    },
    {
      name: "Bob",
      location: {
        latitude: 35.7425,  // Approximately 25 miles northwest (Saitama)
        longitude: 139.6295
      }
    },
    {
      name: "Charlie",
      location: {
        latitude: 35.6355,  // Approximately 25 miles southeast (Chiba)
        longitude: 140.1175
      }
    },
    {
      name: "Diana",
      location: {
        latitude: 35.6895,  // Approximately 25 miles southwest (Yokohama)
        longitude: 139.6100
      }
    }
];

console.log(people);

const Rendezvous = ({ isSOSActive }) => {
    console.log("Rendezvous component rendered, isSOSActive:", isSOSActive);
    const [region, setRegion] = useState(initialRegion);
    const [rendezvousPoint, setRendezvousPoint] = useState(null);
    const [showMarkers, setShowMarkers] = useState(true);

    useEffect(() => {
        console.log("useEffect triggered, isSOSActive:", isSOSActive);
        let interval;
        if (isSOSActive) {
            console.log("Setting up interval for flashing effect");
            interval = setInterval(() => {
                setShowMarkers(prev => !prev);
            }, 500);
        } else {
            console.log("SOS not active, showing markers");
            setShowMarkers(true);
        }

        return () => {
            if (interval) {
                console.log("Clearing interval");
                clearInterval(interval);
            }
        };
    }, [isSOSActive]);

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
                key={showMarkers ? 'visible' : 'hidden'}
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
                {showMarkers && people.map((user, index) => (
                    <Marker
                        key={index}
                        coordinate={user.location}
                        title={user.name}
                        pinColor={'blue'}
                    />
                ))}
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
