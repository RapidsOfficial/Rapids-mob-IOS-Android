import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ApplicationStyles, Colors, Buttons } from "../Theme";

const Styles = StyleSheet.create({
	container: {
		...ApplicationStyles.screen.container,
		alignItems: "center",
		marginBottom: 40,
		padding: 20,
	},
	mnemonicWord: {
		alignSelf: "center",
		backgroundColor: Colors.info,
		borderRadius: 4,
		margin: 10,
		paddingHorizontal: 10,
		paddingVertical: 4,
	},
	mnemonicWords: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	mnemonicsBox: {
		borderColor: Colors.offWhite,
		borderRadius: 8,
		borderWidth: 0.5,
		elevation: 0,
		flexDirection: "row",
		flexWrap: "wrap",
		minHeight: 30,
		width: "100%",
	},
	selectWords: {
		alignSelf: "flex-end",
		color: Colors.primary,
		marginVertical: 10,
	},
});

const WORDS = [
	"shock",
	"little",
	"repeat",
	"supply",
	"shock2",
	"lecture",
	"tunnel",
	"song",
	"elegant",
	"grit",
	"school",
	"lazy",
	"fatigue",
	"film",
	"swallow",
	"blossom",
	"disorder",
	"thank",
	"trap",
	"morning",
	"auto",
	"west",
	"flight",
	"add",
];

export default function ChooseMnemonics(props) {
	const { goNext } = props;
	const [selectedWords, setSelectedWords] = useState([]);
	const options = WORDS.filter((word) => selectedWords.indexOf(word) < 0);
	return (
		<View style={Styles.container}>
			<View style={Styles.mnemonicsBox}>
				{selectedWords.map((word) => (
					<Text
						key={word}
						onPress={() => {
							const index = selectedWords.indexOf(word);
							const arr = [...selectedWords];
							arr.splice(index, 1);
							setSelectedWords([...arr]);
							return true;
						}}
						style={Styles.mnemonicWord}
					>
						{word}
					</Text>
				))}
			</View>
			<Text style={Styles.selectWords}>Select {options.length} words</Text>
			<View style={Styles.mnemonicWords}>
				{options.map((word) => (
					<Text
						key={word}
						onPress={() => setSelectedWords([...selectedWords, word])}
						style={Styles.mnemonicWord}
					>
						{word}
					</Text>
				))}
			</View>
			<Buttons text="Submit" onPress={() => goNext()} />
		</View>
	);
}
