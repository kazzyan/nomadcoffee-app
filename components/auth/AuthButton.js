import { ActivityIndicator } from "react-native";
import styled from "styled-components";
import { colors } from "../../colors";

const Button = styled.TouchableOpacity`
    width: 100%;
    padding: 20px 10px;
    background-color: ${colors.blue};
    border-radius: 4px;
    opacity: ${(props) => (props.disabled ? "0.3" : "1")};
`;

const ButtonText = styled.Text`
    font-weight: bold;
    color: #fff;
`;

export default function AuthButton({ text, onPress, disabled, loading }) {
    return (
        <Button disabled={disabled} onPress={onPress} >            
            {loading ? (
            <ActivityIndicator color="white" />
            ) : (
            <ButtonText>{text}</ButtonText>
            )}
        </Button>
    );
}


