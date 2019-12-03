import { StyleSheet, Dimensions } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1B1E26'
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  containerHeader: {
    height: 100,
    width: '100%',
    alignItems: 'center'
  },
  containerHeadingInfo: {
    marginVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  containerHeadingPrice: {
    color: '#72F586',
    fontSize: 26,
    paddingHorizontal: 5
  },
  containerHeadingCurrency: {
    color: '#72F586',
    fontSize: 14,
    paddingVertical: 8
  },
  
  containerHeadingConfirmationCount: {
    marginVertical: 5
  },
  containerHeadingConfirmationCountText: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 1
  },
  containerHeadingDate: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  containerHeadingDateText: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 1,
    marginHorizontal: 5
  },
  containerHeadingDateTime: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 1,
    marginHorizontal: 5
  },
  containerTransactionsInfo: {
    alignItems: 'center'
  },
  containerTransactionsConfirmation: {
    alignItems: 'center',
    marginVertical: 10
  },
  containerTransactionsConfirmationCountNumber: {
    fontSize: 24,
    color: '#51B14E'
  },
  containerTransactionsConfirmationCountText: {
    fontSize: 12,
    letterSpacing: 1,
    color: '#51B14E',
    marginVertical: 5
  },
  containerTransactionsInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '80%',
    marginVertical: 20
  },
  containerTransactionsInfoTextSend: {
    textAlign: 'center',
    width: '47%',
    color: 'white',
    marginVertical: 3,
    paddingLeft: 50,
    fontSize: 16
  },
  containerTransactionsInfoIcon: {
    width: '5%',
    textAlign: 'center',
  },
  containerTransactionsInfoReceive: {
    width: '47%',
    textAlign: 'center',
    color: 'white',
    marginVertical: 3,
    fontSize: 16,
    paddingRight: 40,
  },
  containerTransactionsInfoLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  containerTransactionsInfoLine1: {
    borderWidth: 1,
    borderColor: 'white',
    width: '40%'
  },
  containerTransactionsInfoLine2: {
    borderWidth: 1,
    borderColor: '#51B14E',
    width: '40%'
  },
  containerTransactionsInfoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  containerTransactionsInfoContentForiegn: {
    width: '50%'
  },
  containerTransactionsInfoContentForiegnName: {
    textAlign: 'center',
    color: 'white',
    fontSize:  12,
    marginVertical: 10
  },
  containerTransactionsInfoContentForiegnAddress: {
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 25,
    width: '80%',
    fontSize:  12,
    letterSpacing: 1
  },
  containerTransactionsInfoContentWallet: {
    width: '50%'
  },
  containerTransactionsInfoContentWalletName: {
    textAlign: 'center',
    color: 'white',
    fontSize:  12,
    marginVertical: 10
  },
  containerTransactionsInfoContentWalletAddress: {
    textAlign: 'center',
    color: 'white',
    width: '80%',
    marginHorizontal: 25,
    fontSize:  12,
    letterSpacing: 1
  },
  containerTransactionsInfoTransaction: {
    alignItems: 'center',
    marginVertical: 30
  },
  containerTransactionsInfoTransactionText: {
    color: 'white',
    marginVertical: 5,
    fontSize: 16
  },
  containerTransactionsInfoTransactionID: {
    color: 'white',
    marginVertical: 5,
    letterSpacing: 1
  },
  containerTransactionsInfoTransactionCopy: {
    alignItems: 'flex-end',
    width: '90%',
    marginHorizontal: 20
  },
  containerTransactionsInfoTransactionCopyButton: {
    height:40,
    width:  80,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 6,
    // marginTop: 10,
    // marginBottom: 10,
    borderColor: '#51B14E',
    borderWidth: 1
  },
  containerTransactionsInfoTransactionCopyButtonText: {
    textAlign: 'center',
    color: '#51B14E',
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 2,
  },
  containerTransactionsInfoOptions: {
    width: '90%',
    marginTop: 20
  },
  containerTransactionsInfoOptionsButtonView: {
    height:55,
    width:  '100%',
    justifyContent: 'center',
    backgroundColor: '#51B14E',
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#72F586',
    borderWidth: 1
  },
  containerTransactionsInfoOptionsButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 2,
  },
  containerTransactionsInfoOptionsButtonClose: {
    height:55,
    width:  '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#72F586',
    borderWidth: 1
  },
  containerTransactionsInfoOptionsButtonCloseText: {
    textAlign: 'center',
    color: '#51B14E',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 2,
  },
})
