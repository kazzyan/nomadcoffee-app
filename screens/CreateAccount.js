import {useEffect, useRef } from "react";
import { TextInput } from "../components/auth/AuthShared";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount(
        $username: String!
        $email: String!
        $name: String!
        $password: String!
    ) {
        createAccount(
            username: $username
            email: $email
            name: $name
            password: $password
        ) {
            ok
            error
        }
    }
`;

export default function CreateAccount({ navigation }) {
    const { register, handleSubmit, setValue, getValues } = useForm();

    const usernameRef = useRef();
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();

    const onCompleted = (data) => {
        const {
            createAccount: { ok }
        } = data;
    console.log(data)
        const { username, password } = getValues();

        if(ok) {
            navigation.navigate("Login", {
                username,
                password
            });
        }
    }    

    const [createAccountMutation, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
        onCompleted,
    })

    const onNext = (nextOne) => {
        nextOne?.current?.focus();
    }

    const onValid = (data) => {
        if(!loading) {
            createAccountMutation({
                variables: {
                    ...data,
                }
            })
        }
    }

    useEffect(() => {
        register("username", {
            required: true,
        });
        register("email", {
            required: true,
        });
        register("name", {
            required: true,
        });
        register("password", {
            required: true,
        });
    }, [register]);

    return (
        <AuthLayout>
            <TextInput
                ref={usernameRef}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => onNext(emailRef)}
                onChangeText={(text) => setValue("username", text)}
                placeholder="username"
                placeholderTextColor="gray"
            />        
            <TextInput
                ref={emailRef}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => onNext(nameRef)}
                onChangeText={(text) => setValue("email", text)}
                placeholder="email"
                placeholderTextColor="gray"
            />        
            <TextInput
                ref={nameRef}
                returnKeyType="next"
                onSubmitEditing={() => onNext(passwordRef)}
                onChangeText={(text) => setValue("name", text)}
                placeholder="name"
                placeholderTextColor="gray"
            />            
            <TextInput
                ref={passwordRef}
                secureTextEntry
                returnKeyType="done"
                lastOne={true}
                onChangeText={(text) => setValue("password", text)}
                onSubmitEditing={handleSubmit(onValid)}
                placeholder="password"
                placeholderTextColor="gray"
            />
            <AuthButton
                text="Create Account"
                onPress={handleSubmit(onValid)}
                disabled={false}
            />                            
        </AuthLayout>
    );
}