import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import styles from './styles.js';
import PlaceRow from './PlaceRow';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 10.769006789562528, lng: 106.59386021130058}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 10.774666780343463, lng: 106.68818160080741}},
};

const DestinationSearch = props => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  // place Nhà
  const origin = {
    latitude: 10.769006789562528,
    longitude: 106.59386021130058,
  };
  // Place cty
  const destination = {
    latitude: 10.774666780343463,
    longitude: 106.68818160080741,
  };
  const navigation = useNavigation();
  // test location
  const checkNavigation = () => {
    if (origin && destination) {
      navigation.navigate('SearchResults', {
        origin,
        destination,
      });
    }
  };

  // const checkNavigation = () =>
  // {
  //   if (originPlace && destinationPlace)
  //   {
  //     navigation.navigate('SearchResults', {
  //       originPlace,
  //       destinationPlace,
  //     });
  //   }
  // };

  console.log(origin.latitude, origin.longitude);
  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Current location"
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBR1L4prowS62LaPaSZ2Mvbco4BjQ49EvE',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          s
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBR1L4prowS62LaPaSZ2Mvbco4BjQ49EvE',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />

        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
