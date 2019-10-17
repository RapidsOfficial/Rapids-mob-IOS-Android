import React, { useRef, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Wizard from "react-native-wizard";
import Icon from "react-native-vector-icons/FontAwesome5";

import ChooseMnemonics from "../../Components/ChooseMnemonics";
import { ApplicationStyles, Colors, Fonts } from "../../Theme";
import TextWithInfo from "App/Components/TextWithInfo";

function GenericComponent(props) {
	const { index } = props;
	return <Text>Awesome stuff {index}</Text>;
}

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
		flex: 0,
		paddingHorizontal: 20,
		paddingVertical: 10,
		zIndex: 1000,
	},
	navigation: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	stepIndex: {
		color: Colors.primary,
		marginTop: 10,
	},
	stepInfoInfo: {
		color: Colors.offWhite,
	},
	stepInfoRoot: {
		paddingHorizontal: 10,
		paddingVertical: 30,
	},
	stepInfoText: {
		color: Colors.offWhite,
		fontSize: Fonts.size.input,
		textAlign: "center",
	},
});

function Header(props) {
	const { wizard, index, text, navigation, info, length } = props;

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
			<TextWithInfo
				text={text}
				info={info}
				styles={{
					root: HeaderStyles.stepInfoRoot,
					text: HeaderStyles.stepInfoText,
					info: HeaderStyles.stepInfoInfo,
				}}
			/>
		</View>
	);
}

const Styles = StyleSheet.create({
	container: {
		...ApplicationStyles.screen.container,
	},
});
export default function RestoreWallet(props) {
	const wizard = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const { text, info } = steps[currentIndex].props;
	return (
		<ScrollView style={Styles.container}>
			<Header
				index={currentIndex}
				navigation={props.navigation}
				wizard={wizard}
				text={text}
				info={info}
				length={steps.length}
			/>

			<Wizard ref={wizard} currentStep={(i) => setCurrentIndex(i)} steps={steps} />
		</ScrollView>
	);
}
