import { StyleSheet, Dimensions } from 'react-native';
import Fonts from 'App/Theme/Fonts';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  inputContainerStyle: {
    paddingLeft: 10,
    top: -10,
    height: 70,
    borderWidth: 0,
  },
  inputContainerErrorStyle : {
    paddingLeft: 10,
    top: 2,
    height: 70,
    borderWidth: 0,
  },
  titleTextStyle: {
    color: 'white',
    marginLeft: 10,
    marginTop: 10
  },
  containerStyle: {
    height: 61,
    width: width - 25,
    justifyContent: 'center',
    borderRadius: 6,
    borderColor: '#EE5C7F',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  labelTextStyle: {
    color: 'transparent',
    marginTop: 5
  },
  affixTextStyle: {
    ...Fonts.style.normal,
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
    letterSpacing: 3
  }

})
