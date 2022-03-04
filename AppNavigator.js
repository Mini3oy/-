import { createStackNavigator, createAppContainer } from 'react-navigation';
import Myhome from './Myhome';
import Myhome1 from './Myhome1';
import Myhome2 from './Myhome2';
import Misu from './Misu';
import Method2 from './Method2';
import LoginAdmin from './LoginAdmin';
import Admin from './Admin';
import LG from './LG';
import Card from './Card';
import Mitsubishi from './Mitsubishi';
import Panasonic from './Panasonic';
import Pian from './Pian';

const NavigationStack = createStackNavigator({
    Myhome: { screen: Myhome},
    Myhome1: { screen: Myhome1},
    Myhome2: { screen: Myhome2},
    LoginAdmin: { screen: LoginAdmin},
    Admin : {screen : Admin},  
    LG : {screen : LG} , 
    Card: {screen : Card} ,
    Mitsubishi: {screen : Mitsubishi} ,
    Panasonic: {screen : Panasonic} ,
    Misu: {screen : Misu} ,
    Pian: {screen : Pian} ,

});
const AppNavigator = createAppContainer(NavigationStack);
export default AppNavigator;
