import { createStackNavigator } from 'react-navigation';
import KnowledgeMasterScreen from '../components/knowledge/KnowledgeMasterScreen';
import KnowledgeDetailsScreen from '../components/knowledge/KnowledgeDetailsScreen';

const KnowledgeNavigator = createStackNavigator({
  KnowledgeMaster: {
    screen: KnowledgeMasterScreen,
    navigationOptions: {
      title: 'Volksentscheid Transparenz',
    },
  },
  KnowledgeDetails: {
    screen: KnowledgeDetailsScreen,
  },
});

export default KnowledgeNavigator;
