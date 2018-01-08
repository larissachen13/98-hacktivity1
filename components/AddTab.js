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
import ListingsApi from '../api/ListingsApi';
import {bind} from '../utils/utils';

export default class AddTab extends Component<{}> {
  constructor(props, context) {
      super(props, context);
      this.state = {
        'title': 'Pick type', 
        'price': 'Pick price', 
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
    console.log(this.state.title); 
    console.log(this.state.price);
    ListingsApi.addListing({
      "title": this.state.title, 
      "price": this.state.price, 
      "favorite": false,
    });
  }
  
  render() {
    return (
      <View>
          <View style={styles.input}> 
            <Text onPress={this.showTitleActionSheet} >{`Product Type: ${this.state.title}`} </Text>
          </View> 
          <View style={styles.input}> 
            <Text onPress={this.showPriceActionSheet} >{`Product Type: ${this.state.price}`} </Text>
          </View>
          <Button 
            title='Add product' 
            onPress={this.addProduct} 
            color= '#4a80f5'
            /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 100,
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