import { View } from 'react-native';
import { Txt } from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { s } from "./Home.style";
import { getWeatherInterpretation} from "../../utils/meteo-utils"

export default function Home({ weather, interpretation }) {
    const currentWeather = weather.current_weather;
    const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);
    
    return (
        <>        
            <View style={s.basic}>
                 {/* <Txt onPress={()=> console.log("hello")} style={{ fontSize: 30}}>Basic Data</Txt>  */}
                <MeteoBasic interpretation={currentInterpretation} temperature={Math.round(currentWeather.temperature)}/>
            </View>
            <View style={s.searchbar_container}>
                <Txt>
                    Search bar
                </Txt>
            </View>
            <View style={s.advanced}>
                <Txt>
                    Advanced weather info
                </Txt>
            </View>
            
        </>
    );
  }