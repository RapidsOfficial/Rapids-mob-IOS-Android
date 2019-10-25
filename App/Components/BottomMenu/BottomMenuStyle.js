import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  dashboardMenuIcon: {
    bottom: 0,
    padding: 15,
    width: '30%',
    textAlign: 'center'
  },
  dashboardMenu: {
    marginBottom: 0,
    flex: 0.1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'black'

  },
  logo: {
    width: '40%'    
  },
  logoImage: {
    width: '100%',
    height: '230%',
    marginTop: -35
  }
})
