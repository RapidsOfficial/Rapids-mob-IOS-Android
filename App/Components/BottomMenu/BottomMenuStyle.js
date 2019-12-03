import { StyleSheet, Dimensions } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  dashboardMenuContainer: {
    flex: 0.1,
    marginBottom: 0,
  },
  dashboardMenuIcon: {
    width: '35%',
    alignItems: 'center'
  },
  dashboardMenuIconImage: {
    bottom: 0,
    padding: 15,
    width: '30%',
    marginVertical: 18
  },
  dashboardMenu: {    
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'black'
  },
  logo: {
    width: '30%',
    height: 70  
  },
  logoImage: {
    width: '100%',
    height: '230%',
    marginTop: -35
  },


  dashboardMenuClose: {
    flexDirection: 'row'
  },
  closeButton: {
    width: '100%',
    alignItems: 'center',
    height: 50,
    marginTop: -10,
  },
  closeButtonImage: {
    width: '30%',
    height: 150
  },


  dialogTitle: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 2,
    marginBottom: 15
  },
  modalContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 'auto'
  },
  dialogStyle: {
    marginTop: height - 450,
    paddingVertical: 20
  },
  dialogContent: {
    alignItems: 'center'
  },
  transactionBlocks: {
    width: '33.3%',
    alignItems: 'center',
    borderWidth: 0.3,
    borderRadius: 6,
    borderColor: 'lightgray',
    paddingVertical: 10
  },
  transactionBlocksContent: {
    alignItems: 'center'
  },  
  transactionBlockImage: {
    height: '40%'
  },
  transactionBlockTitle: {
    alignItems: 'center',
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16
  },
  transactionBlockInfo: {
    fontSize: 8,
    marginTop: 4,
    marginBottom: 5,
    fontWeight: '300',
    letterSpacing: 1
  }
})
