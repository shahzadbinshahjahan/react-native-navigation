import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,Learn,Marketplace,Community } from '../screens';

const Tab = createBottomTabNavigator();


export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Marketplace" component={Marketplace}/>
      <Tab.Screen name="Community" component={Community}/>
    </Tab.Navigator>
  );
}