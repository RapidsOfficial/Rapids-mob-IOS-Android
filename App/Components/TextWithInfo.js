import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "App/Theme";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Styles = StyleSheet.create({
	infoClick: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	infoClose: {
		color: Colors.primary,
		fontSize: Fonts.size.large,
		marginTop: 10,
		textAlign: "center",
		width: "100%",
	},
	infoContainer: {
		marginTop: 10,
		position: "relative",
		width: "100%",
	},
	infoText: {
		color: Colors.lightGrey,
		fontSize: Fonts.regular,
		marginRight: 8,
		textTransform: "uppercase",
	},
	infoTooltip: {
		backgroundColor: Colors.offWhite,
		borderRadius: 10,
		height: "auto",
		left: 0,
		marginLeft: 20,
		marginRight: 20,
		paddingBottom: 20,
		padding: 10,
		position: "absolute",
		right: 0,
		top: 30,
	},
});

function TextWithInfo({ text, info }) {
	const [showTooltip, toggleTooltip] = useState(false);

	return (
		<View style={Styles.infoContainer}>
			<TouchableWithoutFeedback
				onPress={() => toggleTooltip(!showTooltip)}
				style={Styles.infoClick}
			>
				<Text style={Styles.infoText}>{text}</Text>
				<Icon size={20} color={Colors.lightGrey} name="info-circle" />
			</TouchableWithoutFeedback>
			{showTooltip && (
				<View style={Styles.infoTooltip}>
					<Text>{info}</Text>
					<Text onPress={() => toggleTooltip(!showTooltip)} style={Styles.infoClose}>
						Close
					</Text>
				</View>
			)}
		</View>
	);
}

export default TextWithInfo;
