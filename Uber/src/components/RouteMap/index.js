import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
//import HomeMap from '../components/HomeMap';
const GOOGLE_MAPS_APIKEY = 'AIzaSyBR1L4prowS62LaPaSZ2Mvbco4BjQ49EvE';
import cars from '../../assets/data/cars';
const RouteMap = ({origin, destination}) => {
  const originLoc = {latitude: origin.latitude, longitude: origin.longitude};

  const destinationLoc = {
    latitude: destination.latitude,
    longitude: destination.longitude,
  };
  console.log(originLoc);
  console.log(destinationLoc);
  return (
    <MapView
      style={{height: '100%', width: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 10.768848691251783,
        longitude: 106.59388703336916,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={4}
        strokeColor="black"
      />
      <Marker coordinate={originLoc} title={'origin'} />
      <Marker coordinate={destinationLoc} title={'destination'} />
    </MapView>
  );
};

export default RouteMap;
