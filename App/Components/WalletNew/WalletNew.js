import React from "react";
import { View, Image } from "react-native";
import Style from "./WalletNewStyle";
import { Buttons, Images } from "App/Theme";
import TextWithInfo from "../TextWithInfo";

/**
 * This is an Wallet Home Container.
 *
 */

function WalletHome(props) {
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
					<Buttons text="Restore a Wallet" onPress={() => navigation.navigate("WalletRestore")} />
					<TextWithInfo
						text={"More Info"}
						info={
							"You may recover your wallet by selecting 'RESTORE A WALLET' using your 24 mnemonic phrase words"
						}
					/>
				</View>
			</View>
		</View>
	);
}

WalletHome.propTypes = {};

export default WalletHome;
