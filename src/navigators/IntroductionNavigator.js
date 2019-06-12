import { createStackNavigator } from 'react-navigation';
import IntroductionMasterScreen from '../components/introduction/IntroductionMasterScreen';

const IntroductionNavigator = createStackNavigator({
  IntroductionMaster: {
    screen: IntroductionMasterScreen,
    navigationOptions: {
      title: 'Volksentscheid Transparenz',
    },
  },
});

export default IntroductionNavigator;
