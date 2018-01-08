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
  Image, 
  TouchableOpacity
} from 'react-native';
  
const Listing = ({listing}) => {
  const thumbnails = {
    backpack: require('../imgs/listings/backpack.png'), 
    binoculars: require('../imgs/listings/binoculars.png'), 
    chucks: require('../imgs/listings/chucks.png'), 
    flippers: require('../imgs/listings/flippers.png'), 
    heels: require('../imgs/listings/heels.png'), 
    helmetThumbnail: require('../imgs/listings/helmet.png'), 
    lipstick: require('../imgs/listings/lipstick.png'), 
    sunnies:  require('../imgs/listings/helmet.png')
  };
  const itemThumbnail = thumbnails[listing.title];
  const heart = listing.favorite ? 
    require('../imgs/heart/HeartOpaque.png') : 
    require('../imgs/heart/HeartEmpty.png');
  
  return (
    <View style={styles.listing}>   
      <Text style={styles.price}> {`$${listing.price}`}</Text> 
      <Image
      source={itemThumbnail}
      style={styles.img}
      />
      <View style={styles.heartWrapper}> 
        <TouchableOpacity>
          <Image 
            source={heart}
            style={styles.heart}
            /> 
        </TouchableOpacity> 
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center', 
  },
  img:  {
    width: 160, 
    height: 170,  
  },
  listing: {
    height: 200, 
    shadowOffset:{  width: 0,  height: 2,  },
    shadowColor: 'black',
    shadowOpacity: .24,
    margin: 4,
    paddingVertical: 4,
    backgroundColor: '#fff',
  }, 
  price: {
    textAlign: 'right',
    paddingRight: 4
  }, 
  heart: {
    height: 10, 
    width: 10,
  }, 
  heartWrapper: {
  }
});

 export default Listing;