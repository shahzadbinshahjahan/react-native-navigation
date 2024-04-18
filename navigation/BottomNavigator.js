//generate documentation
/**
 * @param {import("@react-navigation/bottom-tabs").BottomTabBarProps} props
 * @returns {JSX.Element}
 * Component to display bottom tabs
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Home, Learn, Marketplace, Community } from '../screens';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel:"Home",
        tabBarIcon:({color,size})=>(
          <Ionicons name="home" color={color} size={size}/>
        )
      }}/>
      <Tab.Screen name="Learn" component={Learn} options={{
        tabBarLabel:"Learn",
        tabBarIcon:({color,size})=>(
          <Ionicons name="book" color={color} size={size}/>
        )
      }}/>
      <Tab.Screen name="Marketplace" component={Marketplace} options={{
        tabBarLabel:"Marketplace",
        tabBarIcon:({color,size})=>(
          <Ionicons name="cart" color={color} size={size}/>
        )
      }}/>
      <Tab.Screen name="Community" component={Community} options={{
        tabBarLabel:"Community",
        tabBarIcon:({color,size})=>(
          <Ionicons name="people" color={color} size={size}/>
        )
      }}/>
    </Tab.Navigator>
  );
}