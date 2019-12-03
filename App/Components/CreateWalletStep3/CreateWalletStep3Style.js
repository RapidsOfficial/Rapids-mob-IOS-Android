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
  content: {
    width: '100%',
    marginTop: -50,
    marginBottom: 35,
    flex: 1
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  contentTitle: {
    marginHorizontal: 10,
    width: '95%'
  },
  contentStep: {
    fontSize: 16,
    color: '#51B14E',
    paddingVertical: 10
  },

  passwordInputConatiner: {
    marginHorizontal: 5,
    padding: 5,
    width: '98%',
    alignItems: 'center'
  },
  passwordInputText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    marginVertical: 100,
    letterSpacing: 1,
  },
  passwordInputInfo: {
    color: '#51B14E',
    margin: 5,
    alignItems: 'flex-end'
  },
  saveButton: {
    position: 'absolute',
    justifyContent: 'flex-end',
    flex: 1,
    bottom: 0
  },
  clearButton: {
    position: 'absolute',
    justifyContent: 'flex-end',
    flex: 1,
    bottom: 70
  }
})
