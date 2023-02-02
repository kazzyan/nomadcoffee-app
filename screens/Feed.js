import { Text, TouchableOpacity, View } from "react-native";
import { userLogOut } from "../apollo";

export default function Feed() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
            }}
        >
            <TouchableOpacity onPress={userLogOut}>
                <Text style={{ color: "white" }} >
                    This page is Feed!!
                </Text>
            </TouchableOpacity>
        </View>
    );
}