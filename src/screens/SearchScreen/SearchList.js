import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import MovieItem from '../../components/MovieItem'
import Spinner from '../../components/common/Spinner'
import _ from 'lodash'

import { connect } from 'react-redux';
import * as actions from '../../actions';


class SearchList extends Component {
	
	render () {
		const {search_movies_items, is_searching } = this.props;
		
		if(!is_searching && (search_movies_items.length === 0 )){
			return(
				<Text style={styles.notFound}> No Result Found </Text>
			);
		}else if(!is_searching){
			return (
				<FlatList
					style={{marginBottom:10}}
					data={ search_movies_items }
					keyExtractor={(item, index) => index}
					renderItem={({item}) => {
						return (
							<MovieItem movieParams={item} navigate = {this.props.navigate}/>
						)
					}}
				/>
			);

		}else{
			return(
				<View style={styles.spinnerContainer}>
					<Spinner/>
				</View>
			)
		}
	}
};

const styles = StyleSheet.create({
	spinnerContainer: {
		marginTop: 150,
		height: 500,
	},
	notFound:{
		fontSize:32,
		color:'red', 
		marginTop: 200 ,
		textAlignVertical: "center",
		textAlign: "center"
	}
});


const mapStateToProps = (state) => {
	return {
		search_movies_items: state.SearchReducer.search_movies_items,
		is_searching: state.SearchReducer.is_searching,
		search_text: state.SearchReducer.search_text
	}
}


export default connect(mapStateToProps, actions)(SearchList);