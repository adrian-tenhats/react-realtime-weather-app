import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from "./App.style";
import Home from './pages/Home/Home';
import backgroundImg from "./assets/background.png";
import { useEffect, useState } from 'react';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { WeatherAPI } from './api/weather';
import { useFonts } from "expo-font";

export default function App() {
 const [coordinates, setCoordinates]= useState();
 const [weather, setWeather] = useState();
 const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
 }); 
 
 useEffect(()=>{
    getUserCoordinates();
  }, []);

  useEffect(()=>{
   if(coordinates){
    fetchWeatherByCoords(coordinates);
   }
  }, [coordinates]);

  async function fetchWeatherByCoords(coords){
    const weatherResponse = await WeatherAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function getUserCoordinates(){
    const{ status } = await requestForegroundPermissionsAsync();
    
    if(status === "granted"){
      const location = await getCurrentPositionAsync();
      setCoordinates({lat: location.coords.latitude, lng: location.coords.longitude})
    }else{
      setCoordinates({lat: 24.5551, lng: 81.7800})
    }
  }

  console.log(coordinates);
  // console.log(weather);


  return (
    <ImageBackground imageStyle={s.img} style={s.img_background} source={backgroundImg}>   
      <SafeAreaProvider >
        <SafeAreaView style={s.container}>
          {isFontLoaded && weather && <Home weather={weather} />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

