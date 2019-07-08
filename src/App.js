import SearchScreen from './screens/SearchScreen';
import DetailsMovieScreen from './screens/DetailsMovieScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Search: {screen: SearchScreen},
  Detail: {screen: DetailsMovieScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
