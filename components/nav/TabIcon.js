import { Ionicons } from "@expo/vector-icons";

export default function TabIcon({ name, color, focused, size }) {
    return (
        <Ionicons
            name={focused? name : `${name}-outline`}
            color={color}
            size={focused? size : (size - 4)} 
        />   
    )                        
}
            