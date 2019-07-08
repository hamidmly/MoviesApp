import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import PosterRow from '../../components/cards/rows/PosterRow';
import SectionRow from '../../components/cards/rows/SectionRow';
import MainInfoRow from '../../components/cards/rows/MainInfoRow';



import { white, pink, blue } from '../../constants/Colors';

const renderTruncatedFooter = handlePress => (
  <TouchableOpacity onPress={handlePress}>
    <Text style={styles.readMore}>Read more</Text>
  </TouchableOpacity>
);

const renderRevealedFooter = handlePress => (
  <TouchableOpacity onPress={handlePress}>
    <Text style={styles.readMore}>Read less</Text>
  </TouchableOpacity>
);

export default class DetailsMovieScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Movie details',
    };
  };
  
  render() {

    const { navigation } = this.props;
    const movieParams = navigation.getParam('movieParams', {});
    const {
      backdrop_path,
      vote_average,
      title,
      overview,
      release_date
    } = movieParams;
    
    return (
      <View style={styles.container}>
          <ScrollView>
            <PosterRow
              title={title}
              backdropPath={backdrop_path}
              voteAverage={vote_average}
            />
            <View style={styles.containerMovieInfo}>
              <MainInfoRow data= {{'Release data' :release_date,
                                   'Title': title, 
                                   'Rating': vote_average }} />
              <SectionRow title="Synopsis">
                <ReadMore
                  numberOfLines={3}
                  renderTruncatedFooter={renderTruncatedFooter}
                  renderRevealedFooter={renderRevealedFooter}
                >
                  <Text style={styles.subTitleInfo}>{overview}</Text>
                </ReadMore>
              </SectionRow>
            </View>
          </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white
  },
  buttonShare: {
    paddingRight: 15,
    paddingLeft: 20
  },
  containerMovieInfo: {
    margin: 20,
    marginTop: 35
  },
  subTitleInfo: {
    fontSize: 14,
    color: blue,
    textAlign: 'justify'
  },
  readMore: {
    color: pink,
    marginTop: 5,
    textAlign: 'right'
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  }
});
