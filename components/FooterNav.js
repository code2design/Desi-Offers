import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import Message from './Message';
import PostItem from './PostItem';
import MyOffer from './MyOffer';
import ProfileSetting from './ProfileSetting';


const FooterNav = TabNavigator(
    {
        Home: {screen: HomeScreen},
        Message: {screen: Message},
        Post: {screen: PostItem},
        MyOffer: {screen: MyOffer},
        Profile: {screen: ProfileSetting},
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
        animationEnabled: true,
        swipeEnabled: true,
      }
);

export default FooterNav;