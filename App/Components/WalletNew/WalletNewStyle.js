import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors, Fonts } from "App/Theme/";

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
	moreInfoClick: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	moreInfoClose: {
		color: Colors.primary,
		fontSize: Fonts.size.large,
		marginTop: 10,
		textAlign: "center",
		width: "100%",
	},
	moreInfoContainer: {
		marginTop: 10,
		position: "relative",
		width: "100%",
	},
	moreInfoText: {
		color: Colors.lightGrey,
		fontSize: Fonts.regular,
		marginRight: 8,
		textTransform: "uppercase",
	},
	moreInfoTooltip: {
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
