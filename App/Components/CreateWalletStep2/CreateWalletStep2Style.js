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
    color: '#72F586',
    paddingVertical: 10
  },
  contentHeading: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    paddingVertical: 10
  },
  mnemonicInputConatiner: {
    marginHorizontal: 5,
    padding: 5,
    width: '98%',
    alignItems: 'flex-end'
  },
  mnemonicInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'white',
    flexDirection: 'row',
    padding: 10,
    flexWrap: 'wrap',
    height: 370,
    width: '100%',
    justifyContent: 'space-between'
  },
  mnemonicInputContentContainer: {
    margin: 5,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#72F586'
  },
  mnemonicInputContent: {
    flexDirection: 'row'
  },
  mnemonicInputText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600'
  },
  mnemonicInputInfo: {
    color: '#72F586',
    margin: 5,
    alignItems: 'flex-end'
  },
  mnemonicWordsContainer: {
    flexDirection: 'row',
    padding: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  mnemonicWordsContent: {
    margin: 5,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#398C9A'
  },
  mnemonicWordsText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600'
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
