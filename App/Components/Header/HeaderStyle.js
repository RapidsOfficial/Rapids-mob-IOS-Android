import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  walletNavIcon: {
    top: 0,
    padding: 20
  },
  walletNavigator: {
    // marginBottom: 20,
    flex: 0.1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  logo: {
    width: '50%',
    height: '70%',
    margin: 12
  },
  logoText: {
    width: '50%',
    height: '70%',
    margin: 12,
    color: 'white',    
    padding: 12,
    letterSpacing: 1.5,
    flex: 1,
    fontSize: 16,
    paddingRight: 0,
    textAlign: 'right'
  },
  walletNavImage: {
    top: 0,
    padding: 20,    
    width: '10%',
    margin: 12,
  }
})
