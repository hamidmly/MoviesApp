import React,  { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image';
import styles from './styles'


const convertToDate = date => new Date(date).getFullYear() || '';

getImageApi = poster_path => {
  return poster_path
    ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
    : require('../../assets/images/not_found.png');
};

export default class MovieItem extends Component {

  render() {
    const navigate = this.props.navigate;
    
    const movieParams = this.props.movieParams;
    const { title, release_date, poster_path, adult, original_language, vote_average} = movieParams;

    return (
        <TouchableOpacity
          onPress={() => navigate('Detail',  {'movieParams' : movieParams})}
        >
          <View style={styles.containerItem}>
            <Image
              source={getImageApi(poster_path)}
              style={styles.photo}
              height={130}
              width={90}

            />
            <View style={styles.item}>
              <View>
                <Text numberOfLines={2} style={styles.textTitle}>
                  {title}
                </Text>
                <View style={[styles.textRow, styles.containerSubTitle]}>
                  <Text style={styles.textSmall}>
                    {convertToDate(release_date)}
                  </Text>
                  <Text style={styles.trace}> | </Text>
                  <Text numberOfLines={1} style={styles.textSmall}>
                    {original_language}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={[styles.textRow, styles.containerReview]}>
                    {vote_average}
                </Text>
                <Text style={styles.textSmall}>
                    {adult ? 'adult' : 'public'}
                </Text>
             </View>
            </View>
          </View>
        </TouchableOpacity>
      );
  }
}
