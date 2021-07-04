import React from 'react';
import {View, Text, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/core';

const HomeSearch = props => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  };

  return (
    <View>
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        {/* Input Box */}
        <Text style={styles.inputText}>Where To?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />

          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16}></MaterialIcons>
        </View>
      </Pressable>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffff'}></AntDesign>
        </View>
        <Text style={styles.destiantionText}>Spin Nightclub</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={20} color={'#ffff'}></Entypo>
        </View>
        <Text style={styles.destiantionText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
