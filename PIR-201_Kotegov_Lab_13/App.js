import {Text, StyleSheet, View, Image, Alert, Pressable} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Журнал Bright</Text>
            <View style={styles.content}>
                <View style={styles.linkContainer}>
                    <Text style={styles.link} onPress={() => Alert.alert('Нажатие на кнопку "Новости"')}>
                        Новости
                    </Text>
                </View>
                <View>
                    <Image
                        style={styles.img}
                        source={{
                            uri: 'https://brightmagazine.ru/wp-content/uploads/2020/12/pexels-andrea-piacquadio-3755761.jpg',
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.articleTitle}>
                        Превращаем стресс в своего помощника
                    </Text>
                </View>
                <View>
                    <Text style={styles.articleText}>
                        Исследователи Йельского университета заявляют, что люди, которые
                        рассматривают стресс, как возможность личностного роста, отмечают
                        улучшение качества жизни. Сегодня узнаем, как это работает и как
                        увидеть положительные стороны стресса.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.btn} onPress={() => Alert.alert('Нажатие на кнопку "Читать далее..."')}>
                        <Text style={styles.btnText}>Читать далее...</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        paddingHorizontal: 10,
        paddingTop: 40,
        paddingBottom: 60,
    },
    title: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 22,
        color: '#FFF',
    },
    content: {
        backgroundColor: '#121212',
        marginTop: '5%',
        height: '100%',
        paddingHorizontal: 32,
        borderRadius: 16,
    },
    linkContainer: {
        marginVertical: '10%',
    },
    link: {
        color: '#BB86FC',
    },
    img: {
        height: 200,
    },
    articleTitle: {
        fontWeight: '700',
        fontSize: 24,
        marginVertical: '5%',
        color: '#FFF'
    },
    articleText: {
      color: 'rgba(255,255,255,0.7)'
    },
    buttonContainer: {
        marginVertical: 50,
    },
    btn: {
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: '#03DAC6',
    },
    btnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '600',
        letterSpacing: 0.25,
        color: 'black',
    }
});

export default App;
