import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const LoginLink = styled.Text`
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    color: ${colors.blue};
`;

export default function Welcome({ navigation }) {
    const goToSignUp = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("Login");

    return (
        <AuthLayout>
            <AuthButton 
                text="Sign Up!"
                onPress={goToSignUp}
                disabled={false}
            />
            <TouchableOpacity onPress={goToLogin}>
                <LoginLink>
                    Log in
                </LoginLink>
            </TouchableOpacity>
        </AuthLayout>
    )
}