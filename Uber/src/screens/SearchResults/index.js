import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';

//import HomeMap from '../../components/HomeMap/index';
import RouteMap from '../../components/RouteMap/index';
import UberTypes from '../../components/UberTypes';

const HomeScreen = props => {
  const route = useRoute();

  const {origin, destination} = route.params;
  // console.log(origin);
  // console.log(destination);
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 350}}>
        <RouteMap origin={origin} destination={destination} />
      </View>
      <View style={{height: 330}}>
        <UberTypes />
      </View>
    </View>
  );
};

export default HomeScreen;
