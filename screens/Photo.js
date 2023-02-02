import { Text, TouchableOpacity, View } from "react-native";

export default function Photo({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
            }}
        >
            <TouchableOpacity onPress={() => navigation.navigate("Profile")} >
                <Text style={{ color: "white" }} >
                    This page is Photo!!
                </Text>
            </TouchableOpacity>
        </View>
    );
}