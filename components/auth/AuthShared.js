import styled from "styled-components";

export const TextInput = styled.TextInput`
    padding: 10px 10px;
    margin-bottom: ${(props) => (props.lastOne ? 20 : 10)}px;
    color: white;
    background-color: #000;
    border-radius: 4px;
`;