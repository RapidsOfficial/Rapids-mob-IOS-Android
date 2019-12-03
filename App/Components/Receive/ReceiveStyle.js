import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  receiveScreen: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    padding: 12,
    alignItems: 'center'
  },

  selectWalletScreenTitle: {
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 10,
    letterSpacing: 2
  },
  cardSmall: {
    height: 100,
    width: width - 15,
    justifyContent: 'center',
    // borderRadius: 4,
    borderRightColor: '#51B14E',
    marginTop: 10,
    marginBottom: 10,
    borderRightWidth: 2,
    backgroundColor: '#D3F0DD'
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    height: 100,
  },
  cardImage: {
    width: '8%',
    height: 60
  },
  cardCurrentInfoSmall: {
    margin: 15,
    width: '80%'
  },
  cardCurrentInfoHeading: {
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 1
  },
  cardCurrentInfoBalanceValueSmall: {
    fontSize: 20,
    paddingBottom: 10
  },
  cardCurrentInfoCurrencyValueSmall: {
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: '300'
  },

  cardRecentInfoSmall: {
    marginVertical: 35,
  },
  cardCurrentInfoBalanceSmall: {
    flexDirection: 'row'
  },
  cardCurrentInfoBalanceImageSmall: {
    width: '100%',
    height: 30,
    color: '#51B14E'
  },
  receiveScreenCopyButtonContainer: {
    alignItems: 'flex-end',
    width: '100%',
    marginVertical: 20,
  },
  receiveScreenCopyButton: {
    height:40,
    width:  '40%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 6,
    // marginTop: 10,
    // marginBottom: 10,
    borderColor: '#51B14E',
    borderWidth: 1
  },
  receiveScreenCopyButtonText: {
    textAlign: 'center',
    color: '#51B14E',
    fontWeight: '800',
    fontSize: 10,
    letterSpacing: 1,
  },

  sendScreenConfirmContainer: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    padding: 12,
    alignItems: 'center'
  },
  qRCode: {
    alignItems: 'center'
  },

  receiveScreenQRButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: width
  },
  receiveScreenQRButton: {
    height: 40,
    width:  '35%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 6,
    // marginTop: 10,
    // marginBottom: 10,
    borderColor: '#51B14E',
    borderWidth: 1
  },
  receiveScreenQRButtonText: {
    textAlign: 'center',
    color: '#51B14E',
    fontWeight: '800',
    fontSize: 10,
    letterSpacing: 1,
  },

  receiveScreenInfoConatiner: {
    margin: 10,
    textAlign: 'left',
    width: '100%'
  },
  receiveScreenInfoHeading: {
    fontWeight: '600',
    fontSize: 14
  },
  receiveScreenInfoText: {
    fontWeight: '300',
    fontSize: 14,
    letterSpacing: 1.5
  },


  // receiveScreenMainContainer: {
  //   width: '100%'
  // },
  receiveScreenRequestButton: {
    height: 50,
    width: width - 25,
    justifyContent: 'center',
    backgroundColor: '#51B14E',
    borderRadius: 6,
    marginTop: 40,
    marginBottom: 10,
    borderColor: '#51B14E',
    borderWidth: 1
  },
  receiveScreenRequestButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 1,
  },

  receiveScreenCancelButton: {
    height: 50,
    width: width - 25,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#51B14E',
    borderWidth: 1
  },
  receiveScreenCancelButtonText: {
    textAlign: 'center',
    color: '#51B14E',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 1,
  },

})
