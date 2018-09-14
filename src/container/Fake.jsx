// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fakeThunk } from '../actions/fakeAC';

class Fake extends Component {

	componentDidMount() {

		this.props.fakeAction();

	}

	render() {

		return (
			<div> fake </div>
		);

	}

}

function mSTP(state) {

	return {
		fake : state.fake,
	};

}

function mDTP(dispatch) {

	return {
		fakeAction() {

			dispatch(fakeThunk());

		}
	};

}

export default connect(mSTP, mDTP)(Fake);
