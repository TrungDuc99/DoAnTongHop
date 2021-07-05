import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#e7e7e7',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    height: 50,
  },
  inputText: {
    color: '#434343',
    fontSize: 20,
    fontWeight: '600',
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 37,
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 20,
    height: 40,
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
    height: 60,
  },
  destiantionText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;
