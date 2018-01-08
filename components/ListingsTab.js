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
import ListingsApi from '../api/ListingsApi';
import Listings from './Listings';
import {bind} from '../utils/utils';

export default class ListingsTab extends Component<{}> {
  constructor(props, context) {
      super(props, context);
      this.state = {
        listings: []
      }
  }
  
  componentDidMount() {
    ListingsApi.getAllListings()
      .then(function (data) {
        this.setState({
          listings: data
        })
    }.bind(this));
  }
  
  render() {
    return (
      <Listings listings={this.state.listings}/>
    );
  }
}
