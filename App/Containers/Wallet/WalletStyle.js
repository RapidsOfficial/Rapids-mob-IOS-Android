import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    marginVertical: 30,
    flex: 1,
    justifyContent: 'center',
  },
  componentContainer: {
    flex: 1
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  walletNavIcon: {
    position: 'absolute',
    top: 0,
    paddingLeft: 10,
    paddingRight: 10
  },
  walletNavigator: {
    // flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    flex: 0.05
  }
})
