import React, { useRef, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Wizard from "react-native-wizard";
import Icon from "react-native-vector-icons/FontAwesome5";

import ChooseMnemonics from "../../Components/ChooseMnemonics";
import { ApplicationStyles, Colors, Fonts } from "../../Theme";

function GenericComponent(props) {
	console.log(props);
	const { index } = props;
	return <Text>Awesome stuff {index}</Text>;
}

const Styles = StyleSheet.create({});

const steps = [
	{
		component: ChooseMnemonics,
		props: {
			index: 1,
			text: "Please confirm your 24 phrase words following sequenced words of your mnemonic phrase",
			info:
				"Tap the correct 24 mnemonic phrase words (blue) following the example word shown in (green) to complete the sequence .",
		},
	},
	{
		component: GenericComponent,
		props: {
			index: 2,
			text: "",
			info: ".",
		},
	},
	{
		component: GenericComponent,
		props: {
			index: 3,
			text: "",
			info: ".",
		},
	},
];

const HeaderStyles = StyleSheet.create({
	header: {
		...ApplicationStyles.screen.container,
		flex: 0,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	navigation: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	stepIndex: {
		color: Colors.primary,
		marginTop: 10,
	},
	stepInfo: {
		backgroundColor: Colors.offWhite,
		borderRadius: 10,
		height: "auto",
		left: 0,
		padding: 20,
		position: "absolute",
		right: 0,
		top: 0,
	},
	stepText: {
		color: Colors.offWhite,
		fontSize: Fonts.size.input,
		paddingHorizontal: 10,
		paddingVertical: 30,
		position: "relative",
		textAlign: "center",
	},
});

function Header(props) {
	const { wizard, index, text, navigation, info, length } = props;

	const [showInfo, toggleInfo] = useState(true);

	return (
		<View style={HeaderStyles.header}>
			<View style={HeaderStyles.navigation}>
				<Icon
					onPress={() =>
						wizard.current.state.activeStep
							? wizard.current.prev()
							: navigation.navigate("WalletHome")
					}
					size={25}
					color={Colors.primary}
					name="arrow-left"
				/>
				<Icon
					onPress={() => navigation.navigate("WalletHome")}
					size={25}
					color={Colors.primary}
					name="times"
				/>
			</View>
			<Text style={HeaderStyles.stepIndex}>
				Step {index + 1} of {length}{" "}
			</Text>
			<Text style={HeaderStyles.stepText}>
				{text}{" "}
				<Text onPress={() => console.log("Awesome")}>
					<Icon size={17} color={Colors.offWhite} name="info-circle" />
				</Text>
				<View>{showInfo && <Text style={HeaderStyles.stepInfo}>{info}</Text>}</View>
			</Text>
		</View>
	);
}

export default function RestoreWallet(props) {
	const wizard = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const { text, info } = steps[currentIndex].props;
	return (
		<>
			<Header
				index={currentIndex}
				navigation={props.navigation}
				wizard={wizard}
				text={text}
				info={info}
				length={steps.length}
			/>

			<Wizard ref={wizard} currentStep={(i) => setCurrentIndex(i)} steps={steps} />
		</>
	);
}
