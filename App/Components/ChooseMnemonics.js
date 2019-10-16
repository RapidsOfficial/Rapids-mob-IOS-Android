import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ApplicationStyles } from "../Theme";

const Styles = StyleSheet.create({
	container: {
		...ApplicationStyles.screen.container,
	},
});

export default function ChooseMnemonics() {
	return (
		<View style={Styles.container}>
			<Text>Mnemonic box</Text>
		</View>
	);
}
