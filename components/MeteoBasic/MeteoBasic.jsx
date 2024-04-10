import { Text, View, Image, TouchableOpacity } from 'react-native';
import { s } from "./MeteoBasic.style";
import { Txt } from "../../components/Txt/Txt";
import { Clock } from '../Clock/Clock';
import {useNavigation} from "@react-navigation/native";

export function MeteoBasic({ temperature, interpretation, city, dailyWeather  }) {
  const nav = useNavigation()
   
    return <>
    <View style={s.clock}>
      <Clock></Clock>
    </View>
    <View>
      <Txt style={s.city}>{city}</Txt>
    </View>
    <View style={s.interpretation}>
      <Txt style={s.interpretation_text}>{interpretation.label}</Txt>
    </View>
    <View style={s.temperature_box}>
      <TouchableOpacity onPress={()=> nav.navigate("Forecasts", {city, ...dailyWeather})}>
        <Txt style={s.temperature}>{temperature}&deg;</Txt>
      </TouchableOpacity>
      <Image style={s.image} source={interpretation.image} />
    </View>
    </>;    
  }