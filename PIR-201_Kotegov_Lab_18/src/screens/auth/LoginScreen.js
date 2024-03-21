import {View, Text, SafeAreaView, StyleSheet, Pressable, TextInput, Alert} from "react-native";
import SCREENS from "../index";

const LoginScreen = props => {

    const {navigation} = props

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.header}>Авторизация</Text>
                    <Text style={styles.description}>Введите данные, которые указали при регистрации</Text>
                </View>
                <View>
                    <TextInput placeholder="Email" placeholderTextColor='darkgray' style={[styles.input, {marginTop: 30}]}></TextInput>
                    <TextInput placeholder="Пароль" placeholderTextColor='darkgray' style={styles.input} secureTextEntry={true}></TextInput>
                    <Pressable style={styles.btn}
                               onPress={() => Alert.alert('Авторизация прошла успешно!')}>
                        <Text style={styles.btnText}>
                            Войти
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Вы ещё не зарегистрированы?</Text>
                <Pressable onPress={() => {
                    navigation.navigate(SCREENS.REGISTER)
                }}>
                    <Text style={styles.footerBtn}>Регистрация</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
    },
    contentContainer: {
        paddingHorizontal: 20,
    },
    input: {
        fontSize: 16,
        height: 50,
        width: 'auto',
        minHeight: 50,
        maxHeight: 50,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#BB86FC',
        marginBottom: 10,
    },
    doubleInput: {
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: '#BB86FC',
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontWeight: '600',
    },
    footerContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    footerText: {
        fontWeight: '600',
    },
    footerBtn: {
        marginLeft: 3,
        fontWeight: '600',
        color: '#BB86FC'
    },
})

export default LoginScreen