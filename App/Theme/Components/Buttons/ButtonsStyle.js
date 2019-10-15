import { StyleSheet, Dimensions } from "react-native";
import Fonts from "App/Theme/Fonts";
import Colors from "App/Theme/Colors";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
	container: {
		backgroundColor: Colors.primary,
		borderRadius: 6,
		height: 50,
		justifyContent: "center",
		marginBottom: 10,
		marginTop: 10,
		width: width - 25,
	},
	text: {
		...Fonts.style.normal,
		color: Colors.offWhite,
		fontSize: Fonts.size.small,
		fontWeight: "800",
		letterSpacing: 3,
		textAlign: "center",
	},
});
