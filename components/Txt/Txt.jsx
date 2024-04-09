import { Text, useWindowDimensions } from 'react-native';
import { s } from "./Txt.style";
const PIXEL_RATIO_FOR_HEIGHT =  0.0012254901960784314;

// NOTE: The style and ...restProps allows sending a style and any valid events from the parent. 
// Ex: <Txt onPress={()=> console.log("hello")} style={{ fontSize: 30}}>Basic Data</Txt>
// This will override the fontSize and pass the onPress event.

export function Txt({ children, style, ...restProps }) {
    // console.log({children});
  const fontSize = style?.fontSize || s.txt.fontSize;
  const {height} = useWindowDimensions();
  
    return(
      <Text
         style={[s.txt, style, { fontSize: Math.round(fontSize * PIXEL_RATIO_FOR_HEIGHT * height) }]} 
          {...restProps}>
          {children}
      </Text>   
  );}