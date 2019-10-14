import React from "react";
import { Text, StyleSheet } from "react-native";
import { PropTypes } from "prop-types";
import Colors from "./Colors";

const Style = StyleSheet.create({
	root: {
		color: Colors.text,
	},
});

export default function TextComponent(props) {
	return <Text style={[Style.root, props.style]}>{props.children}</Text>;
}

TextComponent.propTypes = {
	style: PropTypes.object,
	children: PropTypes.node,
};
