import { Text, View, Image, TouchableOpacity, useAnimatedValue } from 'react-native';
import { s } from "./Header.style";
import { Txt } from "../../components/Txt/Txt";
import {useNavigation} from "@react-navigation/native";


export function Header({city}) {   
    const nav = useNavigation();

    return (       
      <View style={s.container}>
        <TouchableOpacity style={s.back_btn} onPress={nav.goBack}>
          <Txt>{"<"}</Txt>
        </TouchableOpacity>
        <View style={s.header_text}>
          <Txt>{city.toUpperCase()}</Txt>
          <Txt  style={s.subtitle}>7 Day Forecast</Txt>
        </View>        
      </View>      
  );
}