import { Text, View, Image, TouchableOpacity, useAnimatedValue } from 'react-native';
import { s } from "./ForecastListItem.style";
import { Txt } from "../../components/Txt/Txt";

export function ForecastListItem({image, day, date, temp}) {   
   
    return (       
      <View style={s.container}>        
        <Image style={s.image} source={image}></Image> 
        <Txt style={s.day}>{day}</Txt>
        <Txt style={s.date}>{date}</Txt>
        <Txt style={s.temp}>{temp}&deg;</Txt>       
      </View>      
  );
}