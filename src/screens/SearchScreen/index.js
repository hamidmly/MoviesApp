import React, { Component } from 'react';
import {  View, StyleSheet, Text, Image , SafeAreaView} from 'react-native';
import SearchComponent from '../../components/SearchComponent';
import SearchList from './SearchList'
import store from '../../store';
import { Provider } from 'react-redux';

class SearchScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Search Screen'
    };
    
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Provider store={store}>
        <SafeAreaView>
            <SearchComponent/>
            <SearchList navigate = {navigate}/>
        </SafeAreaView>
    </Provider>
    );
  }
}

export default SearchScreen;
