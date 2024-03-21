import {View, Text, SafeAreaView, StyleSheet, Pressable, TextInput, Button, Dimensions, Alert} from "react-native";
import SCREENS from "../index";
import {useState} from "react";

const RegisterScreen = props => {

    const [email, onChangeEmail] = useState('');

    const {navigation} = props

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.header}>Регистрация</Text>
                    <Text style={styles.description}>Введите данные, необходимые для регистрации пользователя в системе</Text>
                </View>
                <View>
                    <View style={[styles.doubleInput, {marginTop: 30}]}>
                        <TextInput placeholder="Имя" placeholderTextColor='darkgray' style={[styles.input, {flex: 1, marginEnd: 10}]}></TextInput>
                        <TextInput placeholder="Фамилия" placeholderTextColor='darkgray' style={[styles.input, {flex: 1}]}></TextInput>
                    </View>
                    <TextInput placeholder="Email" placeholderTextColor='darkgray' style={styles.input} onChangeText={onChangeEmail}></TextInput>
                    <TextInput placeholder="Пароль" placeholderTextColor='darkgray' style={styles.input}></TextInput>
                    <TextInput placeholder="Подтвердите пароль" placeholderTextColor='darkgray'
                               style={styles.input}></TextInput>
                    <Pressable style={styles.btn}
                               onPress={() => navigation.navigate(SCREENS.HOME, {
                                   paramKey: [email]
                               })}>
                        <Text style={styles.btnText} >
                            Зарегистрироваться
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Вы уже зарегистрированы?</Text>
                <Pressable onPress={() => {
                    navigation.navigate(SCREENS.LOGIN)
                }}>
                    <Text style={styles.footerBtn}>Войти!</Text>
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
        fontSize: 24,
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

export default RegisterScreen