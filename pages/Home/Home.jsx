import { View } from 'react-native';
import { Txt } from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { s } from "./Home.style";


export default function Home({ weather }) {
    const currentWeather = weather.current_weather;
    
    return (
        <>        
            <View style={s.basic}>
                 {/* <Txt onPress={()=> console.log("hello")} style={{ fontSize: 30}}>Basic Data</Txt>  */}
                <MeteoBasic temperature={Math.round(currentWeather.temperature)}/>
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