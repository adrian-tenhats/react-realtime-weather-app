import { TextInput, View } from 'react-native';
import { s } from "./SearchBar.style";
import { Txt } from "../../components/Txt/Txt";

export function SearchBar({onSubmit}) {   
   
    return (       
      <>       
        
        <TextInput 
          onSubmitEditing={(e)=>onSubmit(e.nativeEvent.text)}
          style={s.input} 
          placeholder="Type a city...">
        </TextInput>       
      </>      
  );
}