import {View, Text, SafeAreaView, StyleSheet, Pressable, TextInput, Button, Dimensions, Alert} from "react-native";
import SCREENS from "../index";

const HomePage = ({route}) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Домашняя страница</Text>
            <Text style={styles.description}>{route.params.paramKey[0]}, добро пожаловать!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default HomePage