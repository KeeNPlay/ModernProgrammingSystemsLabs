import {StatusBar} from 'expo-status-bar';
import {
    Button,
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import {useEffect, useRef, useState} from "react";
import SplashScreen from "react-native-splash-screen";
import Carousel, {Pagination} from "react-native-snap-carousel";
import IMAGES from "./assets/images";

export default function App() {
    useEffect(() => {
        if (Platform.OS === 'android') SplashScreen.hide();
    }, []);

    const _carousel = useRef()

    const [activeDotIndex, setActiveDotIndex] = useState(0)

    const data = [
        {
            id: 1,
            title: 'Обзор продуктов',
            image: IMAGES.BROWSE,
            description: 'Просматривайте по категории или бренду среди более чем 1000 продуктов',
        },
        {
            id: 2,
            title: 'Оплачивайте без трудностей',
            image: IMAGES.PAY,
            description: 'Оплачивайте предпочтительным способом, в том числе онлайн-кошельком, картой или криптовалютой',
        },
        {
            id: 3,
            title: 'Отслеживайте заказы',
            image: IMAGES.TRACK,
            description: 'Отслеживайте свой заказ от склада до порога дома',
        },
    ]

    const _renderItem = ({item, index}) => {
        return (
            <View>
                <Image source={item.image} style={styles.img}/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.skipContainer}>
                <Button title='Пропустить' color="dimgray"/>
            </View>
            <Carousel ref={_carousel}
                      data={data}
                      renderItem={_renderItem}
                      sliderWidth={Dimensions.get('window').width}
                      itemWidth={Dimensions.get('window').width}
                      onSnapToItem={index => setActiveDotIndex(index)}
            >
            </Carousel>
            <View>
                <Pagination carouselRef={_carousel} activeDotIndex={activeDotIndex} dotsLength={3} dotStyle={{width: 15}} inactiveDotStyle={{width: 5}}/>
            </View>
            <View style={styles.paginationBtnContainer}>
                <TouchableWithoutFeedback onPress={() => {
                    _carousel.current.snapToItem(activeDotIndex - 1)
                }}>
                    <View style={styles.paginationPrevBtn}><Text>←</Text></View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    _carousel.current.snapToItem(activeDotIndex + 1)
                }}>
                    <View style={styles.paginationNextBtn}><Text>→</Text></View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skipContainer: {
        alignItems: 'flex-end',
        padding: 15,
    },
    img: {
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
    },
    textContainer: {
        padding: 15
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    description: {
        marginTop: 20,
        fontSize: 16,
    },
    paginationBtnContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    paginationPrevBtn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(3,218,198,0.15)',
        marginEnd: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationNextBtn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#03DAC6',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
