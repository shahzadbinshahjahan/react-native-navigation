/**
 * @param {import("@react-navigation/drawer").DrawerContentComponentProps} props
 * @returns {JSX.Element}
 * Component to display drawer navigation
 */
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';
import { Profile,Orders,Activity } from '../screens';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeTab" component={BottomNavigator} options={{headerTitle:"",drawerLabel:"Home"}}/>
      <Drawer.Screen name="My Profile" component={Profile} options={{headerTitle:""}}/>
      <Drawer.Screen name="My Orders" component={Orders} options={{headerTitle:""}}/>
      <Drawer.Screen name="My Activity" component={Activity} options={{headerTitle:""}}/>
    </Drawer.Navigator>
  );
}

// function ProfileInTab(){
//   return (
//     <BottomNavigator initialRouteName="Profile"/>
//   )
// }