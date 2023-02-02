import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View } from "react-native";
import TabIcon from "../components/nav/TabIcon";
import StackNav from "./StackNav";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false, //스택 내비게이터 사용시 2개로 보여주는 것 해결... 기본적으로는 헤더를 숨기는 역할인듯... 
                tabBarActiveTintColor: "white",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "black",
                    borderTopColor: "#ffffff40"
                }
            }}
        >
            <Tabs.Screen
                name="Feed"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon
                            name={"home"}
                            color={color}
                            size={20}
                            focused={focused} 
                        />
                    )
                }}  
            >
                {() => <StackNav screenName="Feed" />}
            </Tabs.Screen>
            <Tabs.Screen
                name="Search"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon
                            name={"search"}
                            color={color}
                            size={20}
                            focused={focused}  
                        />
                    )
                }}  
            >
                {() => <StackNav screenName="Search" />}
            </Tabs.Screen>
            <Tabs.Screen
                name="Camera"
                component={View}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon
                            name={"camera"}
                            color={color}
                            size={20}
                            focused={focused}  
                        />
                    )
                }}  
            >
            </Tabs.Screen>
            <Tabs.Screen
                name="Noti"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon
                            name={"heart"}
                            color={color}
                            size={20}
                            focused={focused}  
                        />
                    )
                }}  
            >
                {() => <StackNav screenName="Noti" />}
            </Tabs.Screen>
            <Tabs.Screen
                name="Me"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabIcon
                            name={"person"}
                            color={color}
                            size={20} 
                            focused={focused} 
                        />
                    )
                }}  
            >
                {() => <StackNav screenName="Me" />}
            </Tabs.Screen>
        </Tabs.Navigator>        
    )
}