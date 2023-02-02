import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context"

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

const TOKEN = "auth";

export const userLogIn = async (token) => {
    /*
    await AsyncStorage.multiSet([
        ["token", token],
        ["loggedIn", "yes"],
    ]);
    */
    await AsyncStorage.setItem(TOKEN, token);

    isLoggedInVar(true);
    tokenVar(token);
}

export const userLogOut = async () => {
    await AsyncStorage.removeItem(TOKEN);

    isLoggedInVar(false);
    tokenVar(null);
}

const httpLink = createHttpLink({
    uri: "http://192.168.0.27:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            auth: tokenVar(),
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default client;
