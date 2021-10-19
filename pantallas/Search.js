import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import { SearchBar, ListItem, Icon, Image } from 'react-native-elements'
import { isEmpty, size } from 'lodash'

import { searchRestaurants } from '../utils/actions'

export default function Search({ navigation }) {
    const [search, setSearch] = useState("")
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        if (isEmpty(search)) {
            return
        }

        async function getData() {
            const response = await searchRestaurants(search)
            
            if (response.statusResponse) {
                setRestaurants(response.restaurants)
                

            }
        }
        getData();
    }, [search])

    return (
        <View>
            <SearchBar
                placeholder="Ingresa nombre del restaurante o alguna descripcion..."
                onChangeText={(e) => setSearch(e)}
                containerStyle={styles.searchBar}
                value={search}
            />
            {
                size(restaurants) > 0 ? (
                    <FlatList
                        data={restaurants}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(restaurant) => 
                            <Restaurant
                                restaurant={restaurant}
                                navigation={navigation}
                            />
                        }
                    />
                ) : (
                    isEmpty(search) ? (
                        <Text style={styles.noFound}>
                            Ingrese las primeras letras del nombre del restaurante o de la Descripcion.
                        </Text>
                    ) : (
                        <Text style={styles.noFound}>
                            No hay restaurantes o descripcion que coincidan con su búsqueda.
                        </Text>
                    )
                )
            }
        </View>
    )
}

function Restaurant ({ restaurant, navigation }) {
    const { id, name, images, description } = restaurant.item

    return (
        <ListItem
            style={styles.menuItem}
            onPress={() => navigation.navigate("restaurants", {
                screen: "restaurant",
                params: { id, name, description }
            })}
        >
            <Image
                resizeMode="cover"
                PlaceholderContent={<ActivityIndicator color="#fff"/>}
                source={{ uri: images[0] }}
                style={styles.imageRestaurant}
            />
            <ListItem.Content>
                <ListItem.Title>Nombre del Restaurante:</ListItem.Title>
                <ListItem.Title>{name}</ListItem.Title>
                <ListItem.Title> </ListItem.Title>
                <ListItem.Title>Descripcion del Restaruante:</ListItem.Title>
                <ListItem.Title>{description}</ListItem.Title>
            </ListItem.Content>
            <Icon
                type="material-community"
                name="chevron-right"
            />
        </ListItem>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginBottom: 20,
        backgroundColor: "#fff"
    },
    imageRestaurant: {
        width: 90,
        height: 90
    },
    noFound: {
        alignSelf: "center",
        width: "90%"
    },
    menuItem: {
        margin: 10
    }
})