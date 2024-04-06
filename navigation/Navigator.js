import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './BottomNavigator';


export default function Navigator(){
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}