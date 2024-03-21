import {createStackNavigator} from "@react-navigation/stack";
import SCREENS from "../screens";
import IntroScreen from "../screens/intro/IntroScreen.js";
import LoginScreen from "../screens/auth/LoginScreen.js";
import RegisterScreen from "../screens/auth/RegisterScreen";

const Stack = createStackNavigator()
const StackNavigation = () => {
    return <Stack.Navigator initialRouteName={SCREENS.INTRO}>
        <Stack.Screen name={SCREENS.INTRO} component={IntroScreen} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.REGISTER} component={RegisterScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
};

export default StackNavigation;