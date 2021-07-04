import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
//import HomeMap from '../components/HomeMap';
const GOOGLE_MAPS_APIKEY = 'AIzaSyAo4UkQsCekkm9fxIdbr6VL-ro4LK4x7ow';
import cars from '../../assets/data/cars';
const RouteMap = props => {
  const origin = {
    latitude: 10.7763895490359,
    longitude: 106.60158316222126,
  };

  const destination = {
    latitude: 10.762545640324094,
    longitude: 106.59802855737091,
  };

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
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={4}
        strokeColor="black"
      />
      <Marker coordinate={origin} title={'origin'} />
      <Marker coordinate={destination} title={'destination'} />
    </MapView>
  );
};

export default RouteMap;
