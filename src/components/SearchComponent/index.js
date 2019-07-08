import React, { Component } from 'react';
import {  TextInput, TouchableOpacity, View } from 'react-native';
import {darkTintColor } from '../../constants/Colors';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styles from './styles'

class SearchComponent extends Component {

    renderSearchIcon = () => {
		if (this.props.is_searching) {
			return (
				<View style={{ backgroundColor: 'white'}}>
					<Icon
						name={'priority-high'}
						size={16}
						color={darkTintColor}
						onPress={this.searchMovies}
					/>
				</View>
			);
		}
		return (
			<View style={{ backgroundColor: darkTintColor}}>
				<Icon
					name={'search'}
					size={16}
					color='white'
				/>
			</View>
		);
	}

	componentDidMount(){
		this.props.searchMovie('popular');
	}
	onSearchTextChange = (text) => {
		this.search_text = text;
		this.props.changeSearchText(this.search_text);
	}
	
	searchMovies = () => {
		this.props.searchMovie(this.search_text);
	}

	render (){
		return (
			<View style={styles.statusBarStyle}>
				<View style={styles.SearchContainer}>
				    <View
					  style={styles.touchableSearchStyle}>

					  <View style={[styles.insideTouchableView]}>
						<TextInput
						    ref={searchTextinputComponent => this.searchTextinputComponent = searchTextinputComponent}
							autoCorrect={false}
							placeholderTextColor='white'
							value={this.props.search_text}
							onChangeText={(text) => this.onSearchTextChange(text)}
							onSubmitEditing={this.searchMovies}
							keyboardType={'web-search'}
							placeholder="Search Movie"
							underlineColorAndroid={darkTintColor}
							style={[styles.customSearchTextInputStyle]}
						/>
						<TouchableOpacity
							style={styles.seachBtn}
							onPress={this.searchMovies.bind(this)}
						>
							{this.renderSearchIcon()}
						</TouchableOpacity>
						
					  </View>
					</View>
				</View>
			</View>
		);
	}
};



const mapStateToProps = (state) => {
	return {
		is_searching: state.is_searching,
		search_text: state.search_text
	}
}


export default connect(mapStateToProps, actions)(SearchComponent);
