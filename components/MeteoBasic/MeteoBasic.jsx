import { Text, View, Image } from 'react-native';
import { s } from "./MeteoBasic.style";
import { Txt } from "../../components/Txt/Txt";
import { Clock } from '../Clock/Clock';

export function MeteoBasic({ temperature, interpretation, city  }) {
   
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
      <Txt style={s.temperature}>{temperature}&deg;</Txt>
      <Image style={s.image} source={interpretation.image} />
    </View>
    </>;    
  }