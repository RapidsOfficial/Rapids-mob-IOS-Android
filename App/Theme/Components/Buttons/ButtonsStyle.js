import { StyleSheet, Dimensions } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: 55,
    width: width - 25,
    justifyContent: 'center',
    backgroundColor: '#72F586',
    borderColor: '#72F586',
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 3,
    // fontSize: Fonts.size.small
  }
})
