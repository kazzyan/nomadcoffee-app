import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components"

const Container = styled.View`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    margin: 0 auto;
    background-color: #1a1a1a;
`;

const Logo = styled.Image`
    max-width: 40%;
    height: 300px;
`;

export default function AuthLayout({ children }) {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    }
    return (
        <TouchableWithoutFeedback
            onPress={dismissKeyboard}
            disabled={Platform.OS === "web"}
            style={{
               rowGap: "10px",
            }}
        >
            <Container>
                <KeyboardAvoidingView
                    behavior="position"
                    keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
                    style={{
                        width: "100%",
                    }}
                >
                    <Logo 
                        resizeMode="contain" 
                        source={require("../../assets/logo.png")} 
                    />
                    {children}
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    )
}

