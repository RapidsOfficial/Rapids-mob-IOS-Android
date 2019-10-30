import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  selectWalletScreen: {
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
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    height: 100,
  },

  selectedWallet: {
    height: 120,
    width: width - 15,
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  cardSmall: {
    height: 120,
    width: width - 15,
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'lightgray',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
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
    height: 30
  },

})
