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
  TabBarIOS
} from 'react-native';
import ListingsTab from './ListingsTab';
import AddTab from './AddTab';
import {bind} from '../utils/utils';

export default class App extends Component<{}> {
  constructor(props, context) {
      super(props, context);
      this.state = {
          selectedTab: 'listings',
          newItem: false,
      };
      bind(this)('_listingsOnPress', '_homeOnPress', '_notifyNewItem');
  }

  _listingsOnPress() {
      this.setState({
          selectedTab: 'listings'
      });
  }

  _homeOnPress() {
      this.setState({
          selectedTab: 'home'
      })
  }

  _notifyNewItem(newItem) {
    this.setState({ newItem });
  }

  render() {
    return (
      <View
        style={styles.container}
        stickyHeaderIndices={[0]}>
      <Text style={styles.header}> SHRINE </Text>
        <TabBarIOS
            selectedTab={this.state.selectedTab}
            style={styles.tab}
            >
            <TabBarIOS.Item
                title="Listings"
                selected={this.state.selectedTab === 'listings'}
                systemIcon="favorites"
                onPress={this._listingsOnPress}>
                <ListingsTab newItem={this.state.newItem} notifyNewItem={this._notifyNewItem} />
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Home"
                selected={this.state.selectedTab === 'home'}
                systemIcon="search"
                onPress={this._homeOnPress}>
                <AddTab notifyNewItem={this._notifyNewItem} />
            </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 16,
  },
  header: {
    height: 50,
    paddingTop: 30,
    textAlign: 'center',
    shadowOffset:{  width: 1,  height: 2,  },
    shadowColor: 'black',
    shadowOpacity: 1,
  }
});
