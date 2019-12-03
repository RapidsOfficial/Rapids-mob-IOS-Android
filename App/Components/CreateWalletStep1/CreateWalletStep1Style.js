import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    paddingVertical: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  createButton: {
    
  }
})
