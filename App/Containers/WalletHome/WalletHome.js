import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import Style from "./WalletHomeStyle";
import { Buttons, Images, Colors } from "App/Theme";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

/**
 * This is an Create Wallet component.
 *
 */

function WalletHome(props) {
	const [showTooltip, toggleTooltip] = useState(false);
	const { navigation } = props;
	return (
		<View style={Style.container}>
			<View>
				<View style={Style.logoContainer}>
					<Image style={Style.logo} source={Images.logo} resizeMode={"contain"} />
				</View>
				<View style={Style.buttonContainer}>
					<Buttons
						text="Create a new wallet"
						onPress={() =>
							navigation.navigate("Wallet", {
								componentToBeRendered: "Info",
							})
						}
					/>
					<Buttons text="Restore a Wallet" />
					<View style={Style.moreInfoContainer}>
						<TouchableWithoutFeedback
							onPress={() => toggleTooltip(!showTooltip)}
							style={Style.moreInfoClick}
						>
							<Text style={Style.moreInfoText}>More Info</Text>
							<Icon size={20} color={Colors.lightGrey} name="info-circle" />
						</TouchableWithoutFeedback>
						{showTooltip && (
							<View style={Style.moreInfoTooltip}>
								<Text>
									You may recover your wallet by selecting 'RESTORE A WALLET' using your 24 mnemonic
									phrase words{" "}
								</Text>
								<Text onPress={() => toggleTooltip(!showTooltip)} style={Style.moreInfoClose}>
									Close
								</Text>
							</View>
						)}
					</View>
				</View>
			</View>
		</View>
	);
}

WalletHome.propTypes = {};

export default WalletHome;
