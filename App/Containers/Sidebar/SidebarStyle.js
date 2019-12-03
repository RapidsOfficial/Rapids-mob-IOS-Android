import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#292C34'
  },
  navSectionStyle: {
    flexDirection: 'row',
    padding: 0
  },
  navItemStyle: {
    padding: 15,
    paddingLeft: 5,
    fontSize: 14,
    color: 'white',
    letterSpacing: 1
  },
  navItemIcon: {
    padding: 10
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  },

  navInnerSectionStyle: {
    flexDirection: 'row',
    padding: 0,
    backgroundColor: '#2D693E'
  },
  navInnerItemContainer: {
    
  },
  navInnerItemContent: {
    borderBottomWidth: 1,
    borderBottomColor: '#36373C',
    padding: 15,
    paddingHorizontal: 52
  },
  navInnerItemTitle: {
    fontSize: 12,
    color: '#4CA756'
  },
  navInnerItemStyle: {
    padding: 15,
    paddingLeft: 0,
    fontSize: 14,
    color: 'white',
    letterSpacing: 1,
    fontWeight: '400'
  }
})
