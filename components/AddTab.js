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
  ActionSheetIOS,
  Button
} from 'react-native';
import { connect } from 'react-redux';

import { addListing } from '../actions/listing-actions';
import {bind} from '../utils/utils';

const mapStateToProps = (state) => ({});

class AddTab extends Component<{}> {
  constructor(props, context) {
      super(props, context);
      this.state = {
        'title': 'Select Type',
        'price': 'Select Price',
      }
      bind(this)('showTitleActionSheet', 'showPriceActionSheet', 'addProduct');
  }

  showTitleActionSheet() {
    const titles = ['backpack', 'binoculars', 'chucks', 'flippers', 'heels', 'helmet', 'lipstick',
  'lipstick', 'shoes', 'sunnies', 'umbrella'];
    ActionSheetIOS.showActionSheetWithOptions({
      options: titles,
    },
    (titleIndex) => {
      this.setState({ title: titles[titleIndex]});
    });
  }

  showPriceActionSheet() {
    const prices = ['10', '20', '30', '40', '50', '60', '80'];
    ActionSheetIOS.showActionSheetWithOptions({
      options: prices,
    },
    (priceIndex) => {
      this.setState({ price: priceIndex * 10});
    });
  }

  addProduct() {
    this.props.addListing(this.state.title, this.state.price);
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.input}onPress={this.showTitleActionSheet} >
            {`Product Type: ${this.state.title}`} 
          </Text>
          <Text style={styles.input} onPress={this.showPriceActionSheet} >
            {`Product Type: ${this.state.price}`} 
          </Text>
          <Button
            title='Add product'
            onPress={this.addProduct}
            color= '#4a80f5'
            />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 8
  },
  button: {
    width: 100,
    margin: 16,
  }
});

export default connect(mapStateToProps, { addListing })(AddTab);
