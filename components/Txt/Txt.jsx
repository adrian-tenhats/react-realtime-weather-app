import { Text } from 'react-native';
import { s } from "./Txt.style";

// NOTE: The style and ...restProps allows sending a style and any valid events from the parent. 
// Ex: <Txt onPress={()=> console.log("hello")} style={{ fontSize: 30}}>Basic Data</Txt>
// This will override the fontSize and pass the onPress event.

export function Txt({ children, style, ...restProps }) {
    // console.log({children});
    return <Text style={[s.txt, style]} {...restProps}>{children}</Text>;    
  }