import { gql, useMutation } from "@apollo/client";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { isLoggedInVar, userLogIn } from "../apollo";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

const LOGIN_MUTATION = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            ok
            token
            error
        }
    }
`;

export default function Login({ route: { params } }) {
    const { register, handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            username: params?.username,
            password: params?.password,
        }
    });

    const usernameRef = useRef();
    const passwordRef = useRef();

    const onCompleted = async (data) => {
        const {
            login : {
                ok,
                token
            }
        } = data;
    console.log(token);
        if(ok) {
            //isLoggedInVar(true);
            await userLogIn(token);
        }
    }

    const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
        onCompleted,
    })

    const onNext = (nextOne) => {
        nextOne?.current?.focus();
    }

    const onValid = (data) => {
        if(!loading) {
            loginMutation({
                variables: {
                    ...data,
                }
            });
        }
    }

    useEffect(() => {
        register("username", {
            required: true,
        });
        register("password", {
            required: true,
        });
    }, [register])

    return (
        <AuthLayout>
            <TextInput
                value={watch("username")}
                ref={usernameRef}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => onNext(passwordRef)}
                onChangeText={(text) => setValue("username", text)}
                placeholder="username"
                placeholderTextColor="gray"
            />
            <TextInput
                value={watch("password")}
                ref={passwordRef}
                secureTextEntry
                returnKeyType="done"
                lastOne={true}
                onSubmitEditing={handleSubmit(onValid)}
                onChangeText={(text) => setValue("password", text)}
                placeholder="username"
                placeholderTextColor="gray"
            />
            <AuthButton
                text="Log In"
                onPress={handleSubmit(onValid)}
                loading={loading}
                disabled={!watch("username") || !watch("password")}
            />
        </AuthLayout>
    )
}