import React from 'react';
import {View, Text} from 'react-native';

//import HomeMap from '../components/HomeMap';
import styles from './styles';
const CovidMessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Help flatten the curve. If you must travel. please exercise caution for
        your safely and the safely of our community
      </Text>
      <Text style={styles.learnMore}>Lean more</Text>
    </View>
  );
};

export default CovidMessage;
