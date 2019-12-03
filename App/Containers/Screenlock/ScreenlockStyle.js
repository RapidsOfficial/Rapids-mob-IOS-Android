import { StyleSheet, Dimensions } from 'react-native';
import ApplicationStyles from 'App/Theme/ApplicationStyles'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  screenLockContainer: {
    ...ApplicationStyles.screen.container,
    paddingVertical: 30,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1B1E26',
    alignItems: 'center'
  },

  walletNavIcon: {
    top: 0,
    padding: 20,
    width: '20%'
  },
  walletNavigator: {
    flex: 0.1,
    flexDirection: 'row',
    width: '100%'
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    width: '65%',
    textAlign: 'center',
    marginVertical: 20
  },
  
  
  screenLock: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
  screenLockContent: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    padding: 12,
    alignItems: 'center',
    height: height - 210
  },
  screenLockTitle: {
    fontWeight: '300',
    letterSpacing: 3,
    marginVertical: 10
  },
  screenLockOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20
  },
  screenLockOptionsText: {
    fontSize: 16,
    fontWeight: '300',
    margin: 8,
    letterSpacing: 1
  },

  resetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 15,
    height: 100,
    borderWidth: 1,
    borderColor: 'lightgray'
  },
  resetImage: {
    width: '10%',
    height: 80,
    margin: 10
  },
  resetCurrentInfoSmall: {
    marginVertical: 30,
    marginHorizontal: 10,
    width: '80%'
  },
  resetCurrentInfoHeading: {
    fontSize: 16,
    fontWeight: '300',
    letterSpacing: 1
  },
  resetCurrentInfoBalanceValueSmall: {
    fontSize: 20,
    paddingBottom: 10
  },
  resetCurrentInfoCurrencyValueSmall: {
    fontSize: 10,
    letterSpacing: 1,
    fontWeight: '300'
  },

  resetRecentInfoSmall: {
    marginVertical: 35,
  },
  resetCurrentInfoBalanceSmall: {
    flexDirection: 'row'
  },
  resetCurrentInfoBalanceImageSmall: {
    width: '100%',
    height: 30
  },
  
  cancelButton: {
    bottom: 0,
    height: 50,
    width:  '95%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    margin: 10,
    borderColor: '#51B14E',
    borderWidth: 1
  },
  cancelButtonText: {
    textAlign: 'center',
    color: '#51B14E',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 1,
  }

})
