import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import Feed from "../screens/Feed";
import Me from "../screens/Me";
import Noti from "../screens/Noti";
import Photo from "../screens/Photo";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

const Stack = createStackNavigator();

export default function StackNav({ screenName }) {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: "black",
                    borderStyle: 1,
                    borderWidth: 0,
                    borderColor: "#ffffff10"
                }
            }}
        >
            {screenName === "Feed" ? (
                <Stack.Screen
                    name="Feed"
                    component={Feed}
                    options={{
                        headerTitle: () => (
                            <Image
                                source={require("../assets/logo.png")}
                                resizeMode="contain"
                                style={{
                                    width: 120,
                                    height: 40
                                }}
                            />   
                        )
                    }}
                />
            ) : null}
            {screenName === "Search" ? (
                <Stack.Screen
                    name="Search"
                    component={Search}
                />
            ) : null}
            {screenName === "Noti" ? (
                <Stack.Screen
                    name="Noti"
                    component={Noti}
                />
            ) : null}
            {screenName === "Me" ? (
                <Stack.Screen
                    name="Me"
                    component={Me}
                />
            ) : null}
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
            <Stack.Screen
                name="Photo"
                component={Photo}
            />
        </Stack.Navigator>
    );
}


