import { Text, View } from "react-native";

export default function Noti() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
            }}
        >
            <Text
                style={{
                    color: "white"
                }}
            >
                This page is Notification!!
            </Text>
        </View>
    );
}