import React from "react";
import { View, Image, Text } from "react-native";
import { Images } from "../../Theme";
import Styles from "./LoadingScreenStyles";

export default function LoadingScreen() {
	return (
		<View style={Styles.container}>
			<Image style={Styles.logo} source={Images.logo} resizeMode={"contain"} />
			<Image style={Styles.cycle} source={Images.cycle} resizeMode={"stretch"} />
			<Text style={Styles.startingText}>Starting Mobile Wallet...</Text>
			<Text style={Styles.versionText}>v0.1</Text>

			<View style={Styles.loadingBar} />
		</View>
	);
}
