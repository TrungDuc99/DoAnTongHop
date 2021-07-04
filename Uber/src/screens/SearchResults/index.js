import React from 'react';
import {View, Text, Dimensions} from 'react-native';

//import HomeMap from '../../components/HomeMap/index';
import RouteMap from '../../components/RouteMap/index';
import UberTypes from '../../components/UberTypes';

const HomeScreen = props => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 350}}>
        <RouteMap />
      </View>
      <View style={{height: 330}}>
        <UberTypes />
      </View>
    </View>
  );
};

export default HomeScreen;
