import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { userLogOut } from "../apollo";
import ScreenLayout from "../components/ScreenLayout";

const SEE_COFFEEHOPS_QUERY = gql`
    query seeCoffeeShops {
        seeCoffeeShops {
            id
            name
            user {
                username
            }
            photos {
                url
            }
            categories {
                slug
            }
            createAt
            updateAt
        }
    }
`;

export default function Feed() {
    const [offset, setOffset] = useState(0);
    const { data, loading, refetch, fetchMore } = useQuery(SEE_COFFEEHOPS_QUERY, {
        variables: {
            offset,
        }
    });

    const [refreshing, setRefreshing] = useState(false);

    const refresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false)
    }

    return (
        <ScreenLayout loading={loading}>
            <FlatList
                onEndReachedThreshold={0.3}
                onEndReached={() => {alert("end reached")}}
                refreshing={refreshing}
                onRefresh={refresh}
                data={data?.seeCoffeeShops}
            />            
        </ScreenLayout>
    );
}