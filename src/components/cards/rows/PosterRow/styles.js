import { StyleSheet, Dimensions } from 'react-native';

import { white, pink } from '../../../../constants/Colors';
const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
  containerMainPhoto: {
    width,
    height: width * 0.6
  },
  mainPhoto: {
    width: '100%',
    height: '100%'
  },
  containerMainPhotoInfo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  containerBackgroundPhotoInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20
  },
  photoInfo: {
    fontSize: 24,
    color: white,
    fontWeight: 'bold'
  },
  photoStar: {
    flexDirection: 'row',
    marginTop: 8
  },
  star: {
    marginRight: 5
  }
});

export default styles;
