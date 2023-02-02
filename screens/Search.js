import { Text, TouchableOpacity, TouchableOpacityComponent, View } from "react-native";

export default function Search({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
            }}
        >
            <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
                <Text style={{ color: "white" }} >
                    This page is Search!!
                </Text>
            </TouchableOpacity>
        </View>
    );
}