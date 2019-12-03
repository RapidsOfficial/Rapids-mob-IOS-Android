import React, { useState } from 'react';
import { View , Text, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Style from './CreateWalletStep2Style';
import { Buttons, Input } from 'App/Theme';

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet Mnemonic component.
 *
 */


const CreateWalletStep2 = ({ selectedWallet, handleState }) => {
  
  let mnemonics = selectedWallet.mnemonic?selectedWallet.mnemonic.split(' '):[];
  const [ userMnemonics, setUserMnemonics ] = useState(mnemonics);
  const [ tempMnemonics, setTempMnemonics ] = useState([]);
  const [ selectedserMnemonics, setSelectedserMnemonics ] = useState([]);

  const updateMnemonics = (word) => {
    let tempUserMnemonics = userMnemonics || [];
    tempUserMnemonics.push(word);

    setUserMnemonics(tempUserMnemonics);
    setTempMnemonics(tempMnemonics.filter(tempMnemonic => tempMnemonic !== word));
  };

  const removeMnemonics = (word) => {
    setUserMnemonics(userMnemonics.filter(userMnemonic => userMnemonic !== word));
    let tempMerMnemonics = tempMnemonics || [];
    tempMerMnemonics.push(word);

    setTempMnemonics(tempMerMnemonics);
  };

  const clearMnemonic = () => {
    setUserMnemonics([]);
    // setTempMnemonics(mnemonics);
    setTempMnemonics(getShuffledArr(mnemonics));
  }

  const updateSelectedMnemonics = () => {
    if(userMnemonics.length !== mnemonics.length)
      return;
    setSelectedserMnemonics(userMnemonics);
    setUserMnemonics([]);
    // setTempMnemonics(mnemonics)
    setTempMnemonics(getShuffledArr(mnemonics));
  }

  const saveMnemonic = () => {
    let createdMnemonic = userMnemonics.join(' ');
    let confirmMnemonic = selectedserMnemonics.join(' ');
    if(createdMnemonic === confirmMnemonic) {
      handleState('phrases', createdMnemonic);
      handleState('changeState', 'Password');
    } else {
      console.log('failed');  
    }
  };

  const getShuffledArr = arr => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  return (
    <View style={Style.container}>
      <ScrollView style={Style.content}>
        <View style={Style.contentTitle}>
          <Text style={Style.contentStep}>Step 1 of 3</Text>
          {selectedserMnemonics.length?
            <Text style={Style.contentHeading}>Please confirm your {mnemonics.length} phrase words following sequenced words of your Mnemonic phrase</Text>
            :
            <Text style={Style.contentHeading}>Save these phrases for backup, they won't be shown again.</Text>
          }
        </View>
        <View style={Style.mnemonicInputConatiner}>
          <View style={Style.mnemonicInput}>
            {userMnemonics.map(userMnemonic => 
              <TouchableHighlight 
                key={userMnemonic} 
                style={Style.mnemonicInputContentContainer}
                onPress={() => selectedserMnemonics.length?removeMnemonics(userMnemonic):{}}
              >
                <View style={Style.mnemonicInputContent}>
                  <Text style={Style.mnemonicInputText}>
                    {userMnemonic}
                  </Text>
                  {selectedserMnemonics.length ? <Icon style={Style.mnemonicInputIcon} name="close" size={20} color="white" /> : <Text></Text>}
                </View>
                
              </TouchableHighlight>)
            }
          </View>
          {selectedserMnemonics.length ?
            <Text style={Style.mnemonicInputInfo}>{tempMnemonics.length?`Select ${tempMnemonics.length} words`:'All words selected'}</Text>
            :
            <Text></Text>
          }
          
        </View>
        <View style={Style.mnemonicWordsContainer}>
          {tempMnemonics.map(tempMnemonic => <TouchableHighlight key={tempMnemonic} style={Style.mnemonicWordsContent} onPress={() => updateMnemonics(tempMnemonic)}><Text style={Style.mnemonicWordsText}>{tempMnemonic}</Text></TouchableHighlight>)}
        </View>
      </ScrollView>
      
      {tempMnemonics.length == 0 &&
       selectedserMnemonics.length ?
        <View style={Style.clearButton}>
          <Buttons text="Clear" onPress={clearMnemonic} />
        </View>
        :
        <Text></Text>
      }
      
      <View style={Style.saveButton}>
        <Buttons text={selectedserMnemonics.length?"Submit":"Next"} onPress={selectedserMnemonics.length?saveMnemonic:updateSelectedMnemonics} />
      </View>
    </View>
  )
}

CreateWalletStep2.propTypes = {
}

export default CreateWalletStep2;