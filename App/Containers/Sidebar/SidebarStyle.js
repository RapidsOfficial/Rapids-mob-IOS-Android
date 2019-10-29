import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#292C34'
  },
  navItemStyle: {
    padding: 15,
    paddingLeft: 30,
    fontSize: 16,
    color: 'white'
  },
  // navSectionStyle: {
  //   underlayColor: 'red'
  // },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
})
