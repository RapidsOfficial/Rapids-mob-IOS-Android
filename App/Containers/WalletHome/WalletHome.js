import React from "react";
import { View, ActivityIndicator } from "react-native";

import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { Dashboard, WalletLogin, WalletNew } from "App/Components";

/**
 * This is an Wallet Home Container.
 *
 */

class WalletHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			walletId: null,
		};
	}

	componentDidMount() {
		this.walletData();
	}

	walletData = async () => {
		try {
			walletId = await AsyncStorage.getItem("walletId");
			this.setState({ walletId: walletId });
		} catch (e) {
			// saving error
		}
	};

	render() {
		const { walletId } = this.state;
		const { wallet, walletIsLoading } = this.props;

		return (
			<View style={{ flex: 1 }}>
				{walletIsLoading ? (
					<ActivityIndicator size="large" color="#0000ff" />
				) : walletId && Object.keys(wallet).length ? (
					<Dashboard />
				) : walletId ? (
					<WalletLogin />
				) : (
					<WalletNew {...this.props} />
				)}
			</View>
		);
	}
}

WalletHome.propTypes = {};

const mapStateToProps = (state) => ({
	wallet: state.wallet.wallet,
	walletIsLoading: state.wallet.walletIsLoading,
	fetchWalletFailure: state.wallet.fetchWalletFailure,
});

export default connect(
	mapStateToProps,
	null
)(WalletHome);
