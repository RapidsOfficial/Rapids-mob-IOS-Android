import { StyleSheet } from "react-native";
import Fonts from "App/Theme/Fonts";
import ApplicationStyles from "App/Theme/ApplicationStyles";

export default StyleSheet.create({
	container: {
		...ApplicationStyles.screen.container,
		flex: 1,
		justifyContent: "center",
		marginVertical: 30,
	},
	loading: {
		...Fonts.style.normal,
		marginBottom: 5,
		textAlign: "center",
	},
});
