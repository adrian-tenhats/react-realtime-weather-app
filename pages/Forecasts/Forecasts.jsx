import { Text, View, Image } from 'react-native';
import { s } from "./Forecasts.style";
import { Txt } from "../../components/Txt/Txt";
import {useRoute} from "@react-navigation/native";
import { Header } from '../../components/Header/Header';


export function Forecasts({}) {   
    const { params } = useRoute();
    
    return     
    
      <Header />
   
      
  }