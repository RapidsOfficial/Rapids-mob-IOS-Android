import { StyleSheet } from "react-native";
import { ApplicationStyles } from "App/Theme/";

export default StyleSheet.create({
	buttonContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		...ApplicationStyles.screen.container,
		flex: 1,
		justifyContent: "flex-start",
		paddingVertical: 30,
	},
	logo: {
		height: "100%",
		width: "50%",
	},
	logoContainer: {
		alignItems: "center",
		height: 300,
		marginBottom: 25,
		width: "100%",
	},
});
