import React from 'react';
import {View, Text} from 'react-native';
import UberTypeRow from '../UberTypeRow/index';

import styles from './styles';
import typesData from '../../assets/data/types';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const UberTypes = props => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map(type => (
        <UberTypeRow type={type} />
      ))}

      <Pressable
        OnPress={confirm}
        style={{
          width: '100%',
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}> Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
