
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FootballDetailScreen, FootballTeamListScreen } from '@screens';
import { THomeStackParamList } from './navigationTypes';
import { EScreens } from './Screens';

export const RootAppNavigationStack = () => {

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

const Tabs = createBottomTabNavigator();
const BottomTabs = () => {

 
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" component={HomeScreenStack} />
    </Tabs.Navigator>
  );
}


const HomeStack = createNativeStackNavigator<THomeStackParamList>();
const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator  screenOptions={{ headerBackVisible: false, headerShown: false,}}>
      <HomeStack.Screen name={EScreens.FootballTeamListScreen} component={FootballTeamListScreen} />
      <HomeStack.Screen name={EScreens.FootballDetailScreen} component={FootballDetailScreen} />
    </HomeStack.Navigator>

  )
}
