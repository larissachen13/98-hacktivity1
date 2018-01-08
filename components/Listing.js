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
import { connect } from 'react-redux';


import { favoriteListing } from '../actions/listing-actions';
import heartOpaque from '../imgs/heart/HeartOpaque.png';
import heartEmpty from '../imgs/heart/HeartEmpty.png';
import {bind} from '../utils/utils';

const mapStateToProps = (state) => ({
  favorite: state.listings.favorite,
  active: state.listings.active,
  isActive: state.listings.isActive,
});

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

class Listing extends Component<{}> {
  constructor(props, context) {
    const listing = props.listing;

      super(props, context);
      this.state = {};
      this.itemThumbnail = thumbnails[listing.title];
  }

  render() {
    const listing = this.props.listing;
    let favorite = this.props.listing.favorite;
    const id = this.props.listing._id;

    if (Object.prototype.hasOwnProperty.call(this.props.favorite, id)) {
      favorite = this.props.favorite[id];
    }

    return (
      <View style={styles.listing}>
        <Text style={styles.price}> {`$${listing.price}`}</Text>
        <Image
        source={this.itemThumbnail}
        style={styles.img}
        />
        <View
          style={styles.heartWrapper}
        >
          <TouchableOpacity onPress={() => { this.props.favoriteListing(listing._id); }}>
            <Image
              source={favorite ? heartOpaque : heartEmpty}
              style={styles.heart}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

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

export default connect(mapStateToProps, { favoriteListing })(Listing);
