import { StyleSheet } from 'react-native';
import {
    darkBlue,
    blue
} from '../../constants/Colors';

const styles = StyleSheet.create({
    containerItem: {
      paddingRight: 20,
      paddingLeft: 20,
      paddingTop: 10,
      marginBottom: 20,
      flexDirection: 'row'
    },
    containerTwoItem: {
      paddingTop: 10,
      marginBottom: 20,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%'
    },
    photo: {
      borderRadius: 8
    },
    item: {
      marginLeft: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1
    },
    textTitle: {
      fontSize: 16,
      color: darkBlue,
      fontWeight: 'bold'
    },
    textRow: {
      flexDirection: 'row'
    },
    containerSubTitle: {
      marginTop: 3,
      marginBottom: 3
    },
    containerReview: {
      justifyContent: 'space-between',
      marginRight: 20
    },
    textSmall: {
      fontSize: 12,
      color: blue
    },
    trace: {
      marginLeft: 5,
      marginRight: 5,
      fontSize: 12,
      color: blue
    },
    
   
  });

  export default styles;