import React from "react";
import { Platform, View, Button, ActivityIndicator, Image } from "react-native";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import ExampleActions from "App/Stores/Example/Actions";
import { liveInEurope } from "App/Stores/Example/Selectors";
import Style from "./ExampleScreenStyle";
import { Images } from "App/Theme";
import { LightText } from "../../Theme";

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
	ios: "Press Cmd+R to reload,\nCmd+D or shake for dev menu.",
	android: "Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.",
});

class ExampleScreen extends React.Component {
	componentDidMount() {
		this._fetchUser();
	}

	render() {
		return (
			<View style={Style.container}>
				{this.props.userIsLoading ? (
					<ActivityIndicator size="large" color="#0000ff" />
				) : (
					<View>
						<View style={Style.logoContainer}>
							<Image style={Style.logo} source={Images.logo} resizeMode={"contain"} />
						</View>
						<LightText style={Style.text}>To get started, edit App.js</LightText>
						<LightText style={Style.instructions}>{instructions}</LightText>
						{this.props.userErrorMessage ? (
							<LightText style={Style.error}>{this.props.userErrorMessage}</LightText>
						) : (
							<View>
								<LightText style={Style.result}>
									{"I'm a fake user, my name is "}
									{this.props.user.name}
								</LightText>
								<LightText style={Style.result}>
									{this.props.liveInEurope ? "I live in Europe !" : "I don't live in Europe."}
								</LightText>
							</View>
						)}
						<Button onPress={() => this._fetchUser()} title="Refresh" />
					</View>
				)}
			</View>
		);
	}

	_fetchUser() {
		this.props.fetchUser();
	}
}

ExampleScreen.propTypes = {
	user: PropTypes.object,
	userIsLoading: PropTypes.bool,
	userErrorMessage: PropTypes.string,
	fetchUser: PropTypes.func,
	liveInEurope: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	user: state.example.user,
	userIsLoading: state.example.userIsLoading,
	userErrorMessage: state.example.userErrorMessage,
	liveInEurope: liveInEurope(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchUser: () => dispatch(ExampleActions.fetchUser()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExampleScreen);
