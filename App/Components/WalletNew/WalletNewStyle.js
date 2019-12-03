import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    paddingVertical: 30,
    flex: 1,
    justifyContent: 'center',
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  logoContainer: {
    width: '100%',
    height: 300,
    marginBottom: 25,
    marginTop: -360,
    alignItems: 'center'
  },
  logo: {
    width: '50%',
    height: '100%',
  },
  buttonContainer: {
    alignItems: 'center'
  }
})
