import { StyleSheet } from "react-native";
import Fonts from "App/Theme/Fonts";
import ApplicationStyles from "App/Theme/ApplicationStyles";
import Colors from "../../Theme/Colors";

export default StyleSheet.create({
	container: {
		...ApplicationStyles.screen.container,
		flex: 1,
		justifyContent: "center",
		padding: 30,
	},
	error: {
		...Fonts.style.normal,
		color: Colors.error,
		marginBottom: 5,
		textAlign: "center",
	},
	instructions: {
		...Fonts.style.normal,
		fontStyle: "italic",
		marginBottom: 5,
		textAlign: "center",
	},
	loading: {
		...Fonts.style.normal,
		marginBottom: 5,
		textAlign: "center",
	},
	logo: {
		height: "100%",
		width: "100%",
	},
	logoContainer: {
		height: 300,
		marginBottom: 25,
		width: "100%",
	},
	result: {
		...Fonts.style.normal,
		marginBottom: 5,
		textAlign: "center",
	},
	text: {
		...Fonts.style.normal,
		marginBottom: 5,
		textAlign: "center",
	},
	title: {
		...Fonts.style.h2,
		marginBottom: 10,
		textAlign: "center",
	},
});
