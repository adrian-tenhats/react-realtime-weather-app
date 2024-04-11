
import { StyleSheet } from "react-native"

const BACK_BUTTON_WIDTH = 30;

const s = StyleSheet.create({    
    container:{
        flexDirection: "row",
        
    },
    subtitle:{
        fontSize: 20
    },
    header_text: {
        flex: 1,
        alignItems: "center",
        marginRight: BACK_BUTTON_WIDTH
    },
    back_btn:{
        width: BACK_BUTTON_WIDTH,
    }
});

export {s};