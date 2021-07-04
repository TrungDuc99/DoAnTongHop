import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
//import HomeMap from '../components/HomeMap';
import cars from '../../assets/data/cars';
const HomeMap = props => {
  const getImage = type => {
    if (type === 'UberX') {
      return require(`../../assets/images/top-UberX.png`);
    }
    if (type === 'Comfort') {
      return require(`../../assets/images/top-Comfort.png`);
    }
    if (type === 'UberXL') {
      return require(`../../assets/images/top-UberXL.png`);
    }
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
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{
            latitude: car.latitude,
            longitude: car.longitude,
          }}>
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
