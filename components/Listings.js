/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import Listing from './Listing.js';

const renderListing = ({item}) => {
  return <Listing listing={item}/>;
};
const _keyExtractor = (item, index) => (item._id);

const Listings = ({listings}) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={listings}
      numColumns={2}
      renderItem={renderListing}
      keyExtractor={_keyExtractor}
    />);
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
  },
});

 export default Listings;
