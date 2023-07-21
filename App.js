import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { ImageBackground, StyleSheet, Text, Dimensions, View, ScrollView } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const API_KEY = "3b4d92665a5ac73834187e0c37ae7de9";
const icons={
  Clouds: "cloudy",
  Clear: "day-sunny",
  Snow:"snow",
  Rain:"rains",
  Drizzle:"rain",
  Thunderstorm:"lightning",
  Haze:"fog",
  Wind:"wind",
  Mist:"fog",
}
export default function App() {
  const [city, setCity] = useState("Loading...");
  const [region, setRegion] = useState();
  const [district, setDistrict] = useState();
  const [temp, setTemp] = useState("...");
  const [description, setDescription] = useState();
  const [ok, setOk] = useState(true);

  const [seoulTemp, setSeoulTemp] = useState();
  const [seoulDescription, setSeoulDescription] = useState();

  const [inchoneTemp, setInchoneTemp] = useState();
  const [inchoneDescription, setInchoneDescription] = useState();

  const [suwonTemp, setSuwonTemp] = useState();
  const [suwonDescription, setSuwonDescription] = useState();

  const [bucheonTemp, setBucheonTemp] = useState();
  const [bucheonDescription, setBucheonDescription] = useState();

  const [gimpoTemp, setGimpoTemp] = useState();
  const [gimpoDescription, setGimpoDescription] = useState();

  const [seongnamTemp, setSeongnamTemp] = useState();
  const [seongnamDescription, setSeongnamDescription] = useState();

  const [siheungTemp, setSiheungTemp] = useState();
  const [siheungDescription, setSiheungDescription] = useState();

  const [anyangTemp, setAnyangTemp] = useState();
  const [anyangDescription, setAnyangDescription] = useState();

  const [busanTemp, setBusanTemp] = useState();
  const [busanDescription, setBusanDescription] = useState();

  const [ulsanTemp, setUlsanTemp] = useState();
  const [ulsanDescription, setUlsanDescription] = useState();

  const [gwangjuTemp, setGwangjuTemp] = useState();
  const [gwangjuDescription, setGwangjuDescription] = useState();

  const [daejeonTemp, setDaejeonTemp] = useState();
  const [daejeonDescription, setDaejeonDescription] = useState();

  const [daeguTemp, setDaeguTemp] = useState();
  const [daeguDescription, setDaeguDescription] = useState();

  const [sokchoTemp, setSokchoTemp] = useState();
  const [sokchoDescription, setSokchoDescription] = useState();

  const [cheorwonTemp, setCheorwonTemp] = useState();
  const [cheorwonDescription, setCheorwonDescription] = useState();

  const [jeonjuTemp, setJeonjuTemp] = useState();
  const [jeonjuDescription, setJeonjuDescription] = useState();


  const [tokyoTemp, setTokyoTemp] = useState();
  const [tokyoDescription, setTokyoDescription] = useState();
  
  const [washingtonTemp, setWashingtonTemp] = useState();
  const [washingtonDescription, setWashingtonDescription] = useState();

  const [pyongyangTemp, setPyongyangTemp] = useState();
  const [pyongyangDescription, setPyongyangDescription] = useState();

  const [beijingTemp, setBeijingTemp] = useState();
  const [beijingDescription, setBeijingDescription] = useState();

  const [londonTemp, setLondonTemp] = useState();
  const [londonDescription, setLondonDescription] = useState();

  const [parisTemp, setParisTemp] = useState();
  const [parisDescription, setParisDescription] = useState();

  const [moscowTemp, setMoscowTemp] = useState();
  const [moscowDescription, setMoscowDescription] = useState();

  const [hanoiTemp, setHanoiTemp] = useState();
  const [hanoiDescription, setHanoiDescription] = useState();

  
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    } else {
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 });
      const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
      setRegion(location[0].region);
      setDistrict(location[0].district);
      setCity(location[0].city);
      

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const json = await response.json();
      setTemp(json.main.temp);
      setDescription(json.weather[0].main);
     
    
      const urlSeoul = `https://api.openweathermap.org/data/2.5/weather?lat=37.5715&lon=126.9769&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseSeoul = await fetch(urlSeoul);
      const jsonSeoul = await responseSeoul.json();
      setSeoulTemp(jsonSeoul.main.temp);
      setSeoulDescription(jsonSeoul.weather[0].main);
      
      const urlInchone = `https://api.openweathermap.org/data/2.5/weather?lat=37.456255&lon=126.705206&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseInchone = await fetch(urlInchone);
      const dataInchone = await responseInchone.json();
      setInchoneTemp(dataInchone.main.temp);
      setInchoneDescription(dataInchone.weather[0].main);

      const urlSuwon = `https://api.openweathermap.org/data/2.5/weather?lat=37.2636&lon=127.0286&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseSuwon = await fetch(urlSuwon);
      const dataSuwon = await responseSuwon.json();
      setSuwonTemp(dataSuwon.main.temp);
      setSuwonDescription(dataSuwon.weather[0].main);

      const urlBucheon = `https://api.openweathermap.org/data/2.5/weather?lat=37.503388&lon=126.766616&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseBucheon = await fetch(urlBucheon);
      const dataBucheon = await responseBucheon.json();
      setBucheonTemp(dataBucheon.main.temp);
      setBucheonDescription(dataSuwon.weather[0].main);

      const urlGimpo = `https://api.openweathermap.org/data/2.5/weather?lat=37.615246&lon=126.715632&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseGimpo = await fetch(urlGimpo);
      const dataGimpo = await responseGimpo.json();
      setGimpoTemp(dataGimpo.main.temp);
      setGimpoDescription(dataGimpo.weather[0].main);

      const urlSeongnam = `https://api.openweathermap.org/data/2.5/weather?lat=37.439974&lon=127.137207&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseSeongnam = await fetch(urlSeongnam);
      const dataSeongnam = await responseSeongnam.json();
      setSeongnamTemp(dataSeongnam.main.temp);
      setSeongnamDescription(dataSuwon.weather[0].main);

      const urlSiheung = `https://api.openweathermap.org/data/2.5/weather?lat=37.380491&lon=126.800618&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseSiheung = await fetch(urlSiheung);
      const dataSiheung = await responseSiheung.json();
      setSiheungTemp(dataSiheung.main.temp);
      setSiheungDescription(dataSiheung.weather[0].main);

      const urlAnyang = `https://api.openweathermap.org/data/2.5/weather?lat=37.392477&lon=126.926050&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseAnyang = await fetch(urlAnyang);
      const dataAnyang = await responseAnyang.json();
      setAnyangTemp(dataAnyang.main.temp);
      setAnyangDescription(dataAnyang.weather[0].main);

      const urlBusan = `https://api.openweathermap.org/data/2.5/weather?lat=35.179554&lon=129.075642&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseBusan = await fetch(urlBusan);
      const dataBusan = await responseBusan.json();
      setBusanTemp(dataBusan.main.temp);
      setBusanDescription(dataBusan.weather[0].main);

      const urlUlsan = `https://api.openweathermap.org/data/2.5/weather?lat=35.539430&lon=129.311360&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseUlsan = await fetch(urlUlsan);
      const dataUlsan = await responseUlsan.json();
      setUlsanTemp(dataUlsan.main.temp);
      setUlsanDescription(dataUlsan.weather[0].main);

      const urlGwangju = `https://api.openweathermap.org/data/2.5/weather?lat=35.159545&lon=126.852601&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseGwangju = await fetch(urlGwangju);
      const dataGwangju = await responseGwangju.json();
      setGwangjuTemp(dataGwangju.main.temp);
      setGwangjuDescription(dataGwangju.weather[0].main);

      const urlDaejeon = `https://api.openweathermap.org/data/2.5/weather?lat=36.350411&lon=127.384548&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseDaejeon = await fetch(urlDaejeon);
      const dataDaejeon = await responseDaejeon.json();
      setDaejeonTemp(dataDaejeon.main.temp);
      setDaejeonDescription(dataDaejeon.weather[0].main);

      const urlDaegu = `https://api.openweathermap.org/data/2.5/weather?lat=35.871380&lon=128.601743&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseDaegu = await fetch(urlDaegu);
      const dataDaegu = await responseDaegu.json();
      setDaeguTemp(dataDaegu.main.temp);
      setDaeguDescription(dataDaegu.weather[0].main);

      const urlSokcho = `https://api.openweathermap.org/data/2.5/weather?lat=38.207015&lon=128.591849&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseSokcho = await fetch(urlSokcho);
      const dataSokcho = await responseSokcho.json();
      setSokchoTemp(dataSokcho.main.temp);
      setSokchoDescription(dataSokcho.weather[0].main);

      const urlCheorwon = `https://api.openweathermap.org/data/2.5/weather?lat=38.147778&lon=127.304167&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseCheorwon = await fetch(urlCheorwon);
      const dataCheorwon = await responseCheorwon.json();
      setCheorwonTemp(dataCheorwon.main.temp);
      setCheorwonDescription(dataCheorwon.weather[0].main);

      const urlJeonju = `https://api.openweathermap.org/data/2.5/weather?lat=35.824224&lon=127.147953&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseJeonju = await fetch(urlJeonju);
      const dataJeonju = await responseJeonju.json();
      setJeonjuTemp(dataJeonju.main.temp);
      setJeonjuDescription(dataJeonju.weather[0].main);


      const urlTokyo = `https://api.openweathermap.org/data/2.5/weather?lat=35.682839&lon=139.759455&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseTokyo = await fetch(urlTokyo);
      const dataTokyo = await responseTokyo.json();
      setTokyoTemp(dataTokyo.main.temp);
      setTokyoDescription(dataTokyo.weather[0].main);

      const urlWashington = `https://api.openweathermap.org/data/2.5/weather?lat=38.907192&lon=-77.036873&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseWashington = await fetch(urlWashington);
      const dataWashington = await responseWashington.json();
      setWashingtonTemp(dataWashington.main.temp);
      setWashingtonDescription(dataWashington.weather[0].main);

      const urlPyongyang = `https://api.openweathermap.org/data/2.5/weather?lat=39.039219&lon=125.762524&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responsePyongyang = await fetch(urlPyongyang);
      const dataPyongyang = await responsePyongyang.json();
      setPyongyangTemp(dataPyongyang.main.temp);
      setPyongyangDescription(dataPyongyang.weather[0].main);

      const urlBeijing = `https://api.openweathermap.org/data/2.5/weather?lat=39.904202&lon=116.407394&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseBeijing = await fetch(urlBeijing);
      const dataBeijing = await responseBeijing.json();
      setBeijingTemp(dataBeijing.main.temp);
      setBeijingDescription(dataBeijing.weather[0].main);

      const urlLondon = `https://api.openweathermap.org/data/2.5/weather?lat=51.507351&lon=-0.127758&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseLondon = await fetch(urlLondon);
      const dataLondon = await responseLondon.json();
      setLondonTemp(dataLondon.main.temp);
      setLondonDescription(dataLondon.weather[0].main);

      const urlParis = `https://api.openweathermap.org/data/2.5/weather?lat=48.856613&lon=2.352222&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseParis = await fetch(urlParis);
      const dataParis = await responseParis.json();
      setParisTemp(dataParis.main.temp);
      setParisDescription(dataParis.weather[0].main);

      const urlMoscow = `https://api.openweathermap.org/data/2.5/weather?lat=55.755825&lon=37.617298&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseMoscow = await fetch(urlMoscow);
      const dataMoscow = await responseMoscow.json();
      setMoscowTemp(dataMoscow.main.temp);
      setMoscowDescription(dataMoscow.weather[0].main);

      const urlHanoi = `https://api.openweathermap.org/data/2.5/weather?lat=21.028511&lon=105.854144&exclude=alerts&appid=${API_KEY}&units=metric`;
      const responseHanoi = await fetch(urlHanoi);
      const dataHanoi = await responseHanoi.json();
      setHanoiTemp(dataHanoi.main.temp);
      setHanoiDescription(dataHanoi.weather[0].main);


    }
  };

  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const updateTime = () => {
    const now = new Date();
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const formattedDate = now.toLocaleDateString('ko-KR', dateOptions);
    const formattedTime = now.toLocaleTimeString('ko-KR', timeOptions);
    setCurrentDate(formattedDate);
    setCurrentTime(formattedTime);
  };
  useEffect(() => {
    ask();
    updateTime();

    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={styles.container}>
    <ImageBackground
      source={require('./assets/img03.jpg')}
      style={styles.imageBackground}
      imageStyle={{ opacity: 0.5 }}
    >
      <View style={styles.city}>
        <Text style={styles.cityName}>{region} {city} {district}</Text>
      </View>
      <View style={styles.time}>
      <Text style={styles.currentTime}>{currentTime}</Text>
        <Text style={styles.currentDate}>{currentDate}</Text>
  
        </View>
      <ScrollView 
      pagingEnabled 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <View style={{
            flexDirection:"row", 
           marginTop: -80,
           marginLeft: 65,
          }}>
          <Text style={styles.temp}>{parseFloat(temp).toFixed(1)} </Text>
          <Fontisto name={icons[description]} size={44} color="white"  />
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.seoulTitle}>서울 {parseFloat(seoulTemp).toFixed(1)} {seoulDescription}<Fontisto name={icons[seoulDescription]} size={44} color="white"  /></Text>
          <Text style={styles.seoulTitle}>인천 {parseFloat(inchoneTemp).toFixed(1)} {inchoneDescription}<Fontisto name={icons[inchoneDescription]} size={44} color="white"  /></Text>
          <Text style={styles.seoulTitle}>수원 {parseFloat(suwonTemp).toFixed(1)} {suwonDescription}<Fontisto name={icons[suwonDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>부천 {parseFloat(bucheonTemp).toFixed(1)} {bucheonDescription}<Fontisto name={icons[bucheonDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>김포 {parseFloat(gimpoTemp).toFixed(1)} {gimpoDescription}<Fontisto name={icons[gimpoDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>성남 {parseFloat(seongnamTemp).toFixed(1)} {seongnamDescription}<Fontisto name={icons[seongnamDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>시흥 {parseFloat(siheungTemp).toFixed(1)} {siheungDescription}<Fontisto name={icons[siheungDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>안양 {parseFloat(anyangTemp).toFixed(1)} {anyangDescription}<Fontisto name={icons[anyangDescription]} size={44} color="white"  /></Text> 
        </View>

        <View style={styles.day}>
          <Text style={styles.seoulTitle}>부산 {parseFloat(busanTemp).toFixed(1)} {busanDescription}<Fontisto name={icons[busanDescription]} size={44} color="white"  /></Text>
          <Text style={styles.seoulTitle}>울산 {parseFloat(ulsanTemp).toFixed(1)} {ulsanDescription}<Fontisto name={icons[ulsanDescription]} size={44} color="white"  /></Text>
          <Text style={styles.seoulTitle}>광주 {parseFloat(gwangjuTemp).toFixed(1)} {gwangjuDescription}<Fontisto name={icons[gwangjuDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>대전 {parseFloat(daejeonTemp).toFixed(1)} {daejeonDescription}<Fontisto name={icons[daejeonDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>대구 {parseFloat(daeguTemp).toFixed(1)} {daeguDescription}<Fontisto name={icons[daeguDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>속초 {parseFloat(sokchoTemp).toFixed(1)} {sokchoDescription}<Fontisto name={icons[sokchoDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>철원 {parseFloat(cheorwonTemp).toFixed(1)} {cheorwonDescription}<Fontisto name={icons[cheorwonDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>전주 {parseFloat(jeonjuTemp).toFixed(1)} {jeonjuDescription}<Fontisto name={icons[jeonjuDescription]} size={44} color="white"  /></Text> 
        </View>

        <View style={styles.day}>
          <Text style={styles.seoulTitle}>도쿄 {parseFloat(tokyoTemp).toFixed(1)} {tokyoDescription}<Fontisto name={icons[tokyoDescription]} size={44} color="white"  /></Text>
          <Text style={styles.seoulTitle}>워싱턴 {parseFloat(washingtonTemp).toFixed(1)} {washingtonDescription}<Fontisto name={icons[washingtonDescription]} size={44} color="white"  /></Text>
          <Text style={styles.seoulTitle}>평양 {parseFloat(pyongyangTemp).toFixed(1)} {pyongyangDescription}<Fontisto name={icons[pyongyangDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>베이징 {parseFloat(beijingTemp).toFixed(1)} {beijingDescription}<Fontisto name={icons[beijingDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>런던 {parseFloat(londonTemp).toFixed(1)} {londonDescription}<Fontisto name={icons[londonDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>파리 {parseFloat(parisTemp).toFixed(1)} {parisDescription}<Fontisto name={icons[parisDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>모스크바 {parseFloat(moscowTemp).toFixed(1)} {moscowDescription}<Fontisto name={icons[moscowDescription]} size={44} color="white"  /></Text> 
          <Text style={styles.seoulTitle}>하노이 {parseFloat(hanoiTemp).toFixed(1)} {hanoiDescription}<Fontisto name={icons[hanoiDescription]} size={44} color="white"  /></Text> 
        </View>
        
        </ScrollView>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
  },
  time: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  
  },
  currentDate: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white', // Change text color to white
    opacity: 0.5,

  },
  currentTime: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.8,

  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  city: {
    flex:1,
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    color: "white",
    },
  cityName:{
  
    fontSize:40,
    fontWeight: "800",
    color: "white",
  },
  weather: {
  },
  day:{
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    color: "white",

  },
  temp:{
    fontSize: 80,
  
    color: "white",
  },
  description:{
    marginTop:-10,
    marginRight: 40,
    fontSize: 40,
    color: "white",
  },
  seoulTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
});
