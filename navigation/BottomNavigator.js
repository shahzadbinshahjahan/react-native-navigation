import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Learn, Marketplace, Community, Profile } from '../screens';
import { useMemo } from 'react';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function BottomNavigator({initialRouteName}) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Marketplace" component={Marketplace} />
      <Tab.Screen name="Community" component={Community} />
    </Tab.Navigator>
  );
}

// function withInitialRoute(Component, initialRoute) {
//   return function WrappedComponent(props) {
//     return <Component {...props} initialRoute={initialRoute} />;
//   };
// }

// function HomeStack({initialRoute}){
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {initialRoute === 'HomeScreen' && <Stack.Screen name="HomeScreen" component={Home} />}
//       {initialRoute === 'Profile' && <Stack.Screen name="Profile" component={Profile} />}
//     </Stack.Navigator>
//   )
// }
