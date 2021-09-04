import React from 'react'

import { ScrollView, Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import {Button} from 'react-native-elements'
import Loading from '../../components/Loading'
import {useNavigation} from '@react-navigation/native'

export default function UserGuest() {
        const navigation = useNavigation()

    return (
        
        <ScrollView
                centerContent
                style={styles.viewBody}
                >

            <Image
                source={require("../../assets/restoo-removebg-preview.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil en Restoo!!</Text>
            <Text style={styles.description}>
                Visualiza los mejores Restaurantes de acuerdo a su ponderación
            </Text>
            <Button
                    buttonStyle={styles.button}
                    title="Ver tu perfil"
                    onPress={() => navigation.navigate("login")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    
    },
    image:{
        opacity: 20,
        height: 300,
        width: "100%",
        marginBottom: 10,
        
    },
    title:{
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 0,
        textAlign: "center"
    },
    description:{
        textAlign: "justify",
        marginBottom: 20,
        color: "#bf4d7f"
    },
    button:{
        backgroundColor: "#69338e"

    }

})
