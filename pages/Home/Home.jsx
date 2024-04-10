import { View } from 'react-native';
import { Txt } from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { s } from "./Home.style";
import { getWeatherInterpretation} from "../../utils/meteo-utils"
import { MeteoAdvanced } from '../../components/MeteoAdvanced/MeteoAdvanced';

export function Home({ weather, city }) {
    const currentWeather = weather.current_weather;
    const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);
    
    return (
        <>        
            <View style={s.basic}>
                 {/* <Txt onPress={()=> console.log("hello")} style={{ fontSize: 30}}>Basic Data</Txt>  */}
                <MeteoBasic 
                    dailyWeather={weather.daily}
                    city={city} 
                    interpretation={currentInterpretation} 
                    temperature={Math.round(currentWeather.temperature)}/>
            </View>
            <View style={s.searchbar_container}>
                <Txt>
                    Search bar
                </Txt>
            </View>
            <View style={s.advanced}>
                <MeteoAdvanced sunrise={weather.daily.sunrise[0].split("T")[1]} sunset={weather.daily.sunset[0].split("T")[1]} windspeed={currentWeather.windspeed}/>
            </View>
            
        </>
    );
  }