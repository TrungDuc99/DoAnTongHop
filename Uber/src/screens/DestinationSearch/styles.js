import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eee',
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#e3e0e0',
    marginVertical: 5,
    marginLeft: 20,
  },
  separator: {
    backgroundColor: '#dddddd',
    height: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  locationText: {},
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#919191',
    position: 'absolute',
    top: 28,
    left: 17,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 25,
    left: 15,
    borderRadius: 5,
  },
});

export default styles;
