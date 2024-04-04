import { Text, View } from 'react-native';
import { s } from "./Home.style";

export default function Home() {
    return (
        <>        
            <View style={s.basic}>
                <Text style={s.txt}>
                    Basic weather info
                </Text>
            </View>
            <View style={s.searchbar_container}>
                <Text style={s.txt}>
                    Search bar
                </Text>
            </View>
            <View style={s.advanced}>
                <Text style={s.txt}>
                    Advanced weather info
                </Text>
            </View>
            
        </>
    );
  }