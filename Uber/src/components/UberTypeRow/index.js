import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const UberTypeRow = props => {
  console.log(props);
  const {type} = props;

  const getImage = () => {
    if (type.type === 'UberX') {
      return require(`../../assets/images/UberX.jpeg`);
    }
    if (type.type === 'Comfort') {
      return require(`../../assets/images/Comfort.jpeg`);
    }
    if (type.type === 'UberXL') {
      return require(`../../assets/images/UberXL.jpeg`);
    }
  };
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={getImage()}></Image>
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}
          {''} <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. {type.price}.000vnđ</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
