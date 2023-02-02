import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import LoggedOutNav from './navigators/LoggedOutNav';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import client, { isLoggedInVar, tokenVar } from './apollo';
import LoggedInNav from './navigators/LoggedInNav';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [loading, setLoading] = useState(true);

  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const onFinish = () => setLoading(false);
  const preloadAssets = () => {
    const fotnToLoad = [Ionicons.font];
    const fontPromises = fotnToLoad.map((font) => Font.loadAsync(font));

    const imageToLoad = [require("./assets/logo.png")];
    const imagePromises = imageToLoad.map((image) => Asset.loadAsync(image));

    return Promise.all([...fontPromises, ...imagePromises]);
  }

  const preload = async () => {
    const token = await AsyncStorage.getItem("token");

    if(token) {
      isLoggedInVar(true);
      tokenVar(token);
    }

    return preloadAssets();
  }

  if(loading) {
    return <AppLoading startAsync={preload} onError={console.warn} onFinish={onFinish} />
  }  

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}        
      </NavigationContainer>
    </ApolloProvider>
  );
}

