import React from "react";
import { View, ScrollView, Text } from "react-native";
import Style from "./WalletTermsStyle";
import { Buttons } from "App/Theme";

// import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * This is an Wallet Terms component.
 *
 */

function WalletTerms() {
	return (
		<View style={Style.container}>
			<View>
				<Text style={Style.termsHeading}>Lorem ipsum dolor sit amet.</Text>
			</View>
			<ScrollView style={Style.scrollView}>
				<Text style={Style.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
					dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</Text>
			</ScrollView>
			<View>
				<Buttons text="I ACCEPT & LET'S GO" />
			</View>
			<Text>Hello</Text>
		</View>
	);
}

export default WalletTerms;
