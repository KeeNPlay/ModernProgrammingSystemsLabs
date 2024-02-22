import 'react-native-gesture-handler';
import {
    Platform,
    StyleSheet,
} from 'react-native';
import {useEffect} from "react";
import SplashScreen from "react-native-splash-screen";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import StackNavigation from "./src/navigation";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff'
    }
}

export default function App() {
    useEffect(() => {
        if (Platform.OS === 'android') SplashScreen.hide();
    }, []);



    return (
        <NavigationContainer theme={MyTheme}>
            <StackNavigation/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
