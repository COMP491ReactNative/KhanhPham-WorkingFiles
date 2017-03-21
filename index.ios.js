import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
} from 'react-native';

class ListViewBasics extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var data = Array.apply(null, {length: 49}).map(Number.call, Number);
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    return (
        <View >
          <ListView style={{backgroundColor: 'yellow'}}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <View style={{backgroundColor: 'blue'}}><Text>{rowData}</Text></View>}
          />
        </View>
    );
  }
}
AppRegistry.registerComponent('ListViewBug', () => ListViewBasics);
