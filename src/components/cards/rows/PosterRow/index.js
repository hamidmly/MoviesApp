import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';
import { gold } from '../../../../constants/Colors';
import styles from './styles';

getImageApi = backdropPath => {
  return backdropPath
    ? { uri: `https://image.tmdb.org/t/p/w500/${backdropPath}` }
    : require('../../../../assets/images/not_found.png');
};

const { width } = Dimensions.get('window');

convertRatingToStars = voteAverage => {
  voteAverage =  Math.round(voteAverage/2);
  return [...Array(voteAverage)].map((e, i) => (
          <Icon
            key={i}
            name= {'star'}
            size={width * 0.06}
            color={gold}
            style={styles.star}
          />
         ));
};

const PosterRow = ({
  title,
  backdropPath,
  voteAverage
}) => (
  <View style={styles.containerMainPhoto}>
    <Image
      source={getImageApi(backdropPath)}
      style={styles.mainPhoto}
      resizeMode="cover"
    />
    <TouchableOpacity
      style={styles.containerMainPhotoInfo}
    >
      <View style={styles.containerBackgroundPhotoInfo}>
        <Text numberOfLines={2} style={styles.photoInfo}>
          {title}
        </Text>
        <View style={styles.photoStar}>
          {convertRatingToStars(voteAverage)}
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export default PosterRow;
