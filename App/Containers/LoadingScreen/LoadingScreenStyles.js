import { StyleSheet } from "react-native";
import ApplicationStyles from "App/Theme/ApplicationStyles";
import { Colors, Fonts } from "../../Theme";

export default StyleSheet.create({
	container: {
		...ApplicationStyles.screen.container,
		flex: 1,
	},
	cycle: {
		flex: 1,
		height: "100%",
		width: null,
	},
	loadingBar: {
		backgroundColor: Colors.loadingBar,
		height: 10,
		width: "70%",
	},
	logo: {
		alignSelf: "center",
		height: 150,
		marginTop: 20,
	},
	startingText: {
		alignSelf: "flex-end",
		color: Colors.offWhite,
		fontSize: Fonts.size.large,
		marginBottom: 20,
		marginRight: 30,
		marginTop: 20,
	},
	versionText: {
		alignSelf: "flex-end",
		color: Colors.offWhite,
		fontSize: Fonts.size.small,
	},
});
