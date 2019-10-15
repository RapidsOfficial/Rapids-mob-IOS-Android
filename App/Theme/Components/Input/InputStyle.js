import { StyleSheet, Dimensions } from 'react-native';
import Fonts from 'App/Theme/Fonts';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  inputContainerStyle: {
    paddingLeft: 10,
    top: 5,
    borderWidth: 0,
  },
  titleTextStyle: {
    color: 'white'
  },
  containerStyle: {
    height: 50,
    width: width - 25,
    justifyContent: 'center',
    // backgroundColor: '#51B04D',
    borderRadius: 6,
    borderColor: '#EE5C7F',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10
  },
  labelTextStyle: {
    color: 'transparent'
  },
  affixTextStyle: {
    ...Fonts.style.normal,
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
    letterSpacing: 3
  }

})
