import { StyleSheet, Dimensions } from 'react-native';
import {darkTintColor, tintColor} from '../../constants/Colors';

const styles = StyleSheet.create({
	statusBarStyle: {
		height: 40,
	},
	SearchContainer: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: tintColor
	},
	seachBtn:{
		width: 70
	},
	touchableSearchStyle: {
		backgroundColor: darkTintColor,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	insideTouchableView: {
		width: Dimensions.get('window').width-10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	altTouchableView:{
		width: Dimensions.get('window').width*(.65) -15,
	},
	customSearchTextInputStyle:{
		height: 32,
		width: Dimensions.get('window').width-90,
		fontSize: 14,
		marginLeft: 7,
		padding: 1,
		color: 'white',
	},
});

export default styles;