import { StyleSheet } from "react-native";
import Colors from "App/Theme/Colors";
import ApplicationStyles from "App/Theme/ApplicationStyles";

export default StyleSheet.create({
	container: {
		...ApplicationStyles.screen.container,
		alignItems: "center",
		backgroundColor: Colors.background,
		color: Colors.text,
		display: "flex",
		justifyContent: "center",
	},
	logo: {
		alignItems: "center",
		display: "flex",
		height: 200,
		justifyContent: "center",
		width: 200,
	},
});
