import React, { Component,useState } from 'react';
import {StyleSheet,View, Text, Image, Alert,  Platform,  Dimensions,  Button} from 'react-native';
import MapView,{ PROVIDER_GOOGLE, Marker }from 'react-native-maps';

import * as Location from 'expo-location';


export default function location () {

  

    const [location, setLocation] = useState(null);
    const [Latitude, setlatitude] = useState(35.57845);
    const [Longitude, setlongitude] = useState(-5.36837);


  const [errorMsg, setErrorMsg] = useState(null);

  const test = async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      
      setlatitude(location.coords.latitude);
      setlongitude(location.coords.longitude);

      console.log(location);
    }

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }



  const renderCarouselItem = ({ item }) =>
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Image style={styles.cardImage} source={item.image} />
    </View>

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          style={styles.map}
          Region={{
            latitude: Latitude ,
            longitude: Longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
           }}>
             <Marker
             coordinate ={{latitude:Latitude,longitude:Longitude}}
             title={"Home"}></Marker>

        </MapView>
        
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    height:615,
    width:Dimensions.get('screen').width,
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 48
  },
  cardContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 200,
    width: 300,
    padding: 24,
    borderRadius: 24
  },
  cardImage: {
    height: 120,
    width: 300,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  }
});