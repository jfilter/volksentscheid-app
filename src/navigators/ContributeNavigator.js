import { createStackNavigator } from 'react-navigation';
import ContributeMasterScreen from '../components/contribute/ContributeMasterScreen';
import ContributeDetailsScreen from '../components/contribute/ContributeDetailsScreen';

const ContributeNavigator = createStackNavigator({
  ContributeMaster: {
    screen: ContributeMasterScreen,
    navigationOptions: {
      title: 'Volksentscheid Transparenz',
    },
  },
  ContributeDetails: {
    screen: ContributeDetailsScreen,
  },
});

export default ContributeNavigator;
