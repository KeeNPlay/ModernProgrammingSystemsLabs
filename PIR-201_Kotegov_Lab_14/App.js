import {Alert, Pressable, Image, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Перечитаем книги нашего детства?</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>"Алиса в стране чудес" Льюис Кэрролл</Text>
        </View>
        <View style={styles.content}>
          <Image source={{uri: 'https://www.bookclub.by/goods_img/79790_d8bd173b56277951bbc7eac5be2e64226173a4f4.jpg'}} style={styles.img}/>
          <Text style={styles.contentText}>Приключения Алисы, которая попадает в Страну Чудес вслед за странным кроликом, подходят для всех возрастов. Помимо удивительно замысловатого сюжета, перечитывая его во взрослом возрасте, можно обнаружить элементы социальной сатиры, остроумные каламбуры и  много мудрых высказываний. «Я не могу снова стать той, кем была вчера, потому что я была другим человеком», — говорит в какой-то момент главная героиня, имея в виду изменения в своем теле. Не поспоришь!</Text>
          <Pressable style={styles.btn} onPress={() => Alert.alert('Книга добавлена в избранное!')}>
            <Text style={styles.btnText}>♥</Text>
          </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 1,
    backgroundColor: '#212121',
  },
  headerText: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
  title: {
    flex: 1,
    paddingHorizontal: 72,
    justifyContent: 'center',
    backgroundColor: '#BB86FC',
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
  },
  img: {
    marginTop: 20,
    height: 300,
    width: 230,
    alignSelf: 'center'
  },
  content: {
    flex: 8,
    backgroundColor: '#121212',
  },
  contentText: {
    fontSize: 14,
    paddingHorizontal: 14,
    paddingVertical: 30,
    color: 'rgba(255,255,255,0.7)',
  },
  btn: {
    position: 'absolute',
    bottom: 35,
    right: 20,
    alignItems: 'center',
    padding: 14,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#03DAC6',
  },
  btnText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  }
});
