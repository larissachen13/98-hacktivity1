/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import ListingsApi from '../api/ListingsApi';
import { getAllListings } from '../actions/listing-actions';
import Listings from './Listings';
import {bind} from '../utils/utils';

const mapStateToProps = (state) => ({
  listings: state.listings.listings,
});

class ListingsTab extends Component<{}> {
  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  componentDidMount() {
    this.props.getAllListings();
  }

  componentWillReceiveProps(props) {
    console.log(props);
    if (Object.prototype.hasOwnProperty.call(props, 'newItem')) {
      if (props.newItem) {
        this.props.getAllListings();
      }
    }
  }

  render() {
    return (
      <Listings listings={this.props.listings}/>
    );
  }
};

export default connect(mapStateToProps, { getAllListings })(ListingsTab);
