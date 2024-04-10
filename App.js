import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from "./App.style";
import {Home} from './pages/Home/Home';
import { Forecasts } from './pages/Forecasts/Forecasts';
import backgroundImg from "./assets/background.png";
import { useEffect, useState } from 'react';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { WeatherAPI } from './api/weather';
import { useFonts } from "expo-font";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  }
}

export default function App() {
 const [coordinates, setCoordinates]= useState();
 const [weather, setWeather] = useState();
 const [city, setCity] = useState();
 const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
 }); 
 
 useEffect(()=>{
    getUserCoordinates();
  }, []);

  useEffect(()=>{
   if(coordinates){
    fetchWeatherByCoords(coordinates);
    fetchCityByCoords(coordinates);
   }
  }, [coordinates]);

  async function fetchWeatherByCoords(coords){
    const weatherResponse = await WeatherAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function fetchCityByCoords(coords){
    const cityResponse = await WeatherAPI.fetchCityByCoords(coords);
    setCity(cityResponse);
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

  // console.log(coordinates);
  // console.log(weather);


  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground imageStyle={s.img} style={s.img_background} source={backgroundImg}>   
        <SafeAreaProvider >
          <SafeAreaView style={s.container}>
            {isFontLoaded && weather && (
              <Stack.Navigator screenOptions={{headerShown: false, animation:"fade"}} initialRouteName='Forecasts'>
                <Stack.Screen name="Home">
                  {() => <Home city={city} weather={weather} />}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
              </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}

