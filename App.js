import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from "./App.style";
import Home from './pages/Home/Home';
import backgroundImg from "./assets/background.png";
import { useEffect, useState } from 'react';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { WeatherAPI } from './api/weather';

export default function App() {
 const [coordinates, setCoordinates]= useState();
 const [weather, setWeather] = useState();

  useEffect(()=>{
    getUserCoordinates();
  }, []);

  useEffect(()=>{
   if(coords){
    fetchWeatherByCoords();
   }
  }, [coordinates]);

  async function fetchWeatherByCoords(){
    const weatherResponse = await WeatherAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }
  async function getUserCoordinates(){
    const{ status } = await requestForegroundPermissionsAsync();
    console.log(status);

    if(status === "granted"){
      const location = await getCurrentPositionAsync();
      setCoordinates({lat: location.coords.latitude, lng: location.coords.longitude})
    }else{
      setCoordinates({lat: 48.85, lng: 2.35})
    }
  }

  console.log(coordinates);
  return (
    <ImageBackground imageStyle={s.img} style={s.img_background} source={backgroundImg}>   
      <SafeAreaProvider >
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

