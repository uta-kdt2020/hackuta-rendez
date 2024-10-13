import React from 'react';
import CustomCard from './CustomCard';

export default function GroupPage() {

    return (

    <View style={styles.container}>

        <Text style={styles.text}>Recent Groups</Text>

        <CustomCard 
        title="Japan Trip 2024"
        description="Last active at 2:50 pm  3.4 miles away"
        imageSource={{ uri: './assets/boy.jpg' }} 
        />
        <CustomCard 
        title="Tokyo City Vibes"
        description="Last active at 10:36 am  1.2 miles away"
        imageSource={{ uri: './assets/girl.jpg' }} 
        />

    </View>
    )
}
  //  export default GroupPage;