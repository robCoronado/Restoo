import React from 'react'
import { ScrollView, Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import {useNavigation} from "@react-navigation/native"
import LoginForm from '../../components/Account/LoginForm'
import{ KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"


export default function Login() {
 
    return (
          <KeyboardAwareScrollView>
              <Image
                    source={require("../../assets/restoo-removebg-preview.png")}
                    resizeMode="contain"
                    style={styles.image}
              />

            <View style={styles.container}>
                <LoginForm/>
                <CreateAccount/>
                <RecoverPassoword/>
            </View>
            <Divider style={styles.divider}/>

          </KeyboardAwareScrollView>  

        
    )
}


function RecoverPassoword() {
    const navigation = useNavigation()

    return (
        <Text 
            style={styles.register}
            onPress={() => navigation.navigate("recover-password")}
        >
            ¿Olvidaste tu contraseña?{" "}
            <Text style={styles.btnRegister}>
                RECUPERALA
            </Text>
        </Text>
    )
} 

function CreateAccount(props){
    const navigation = useNavigation()
    return(
        <Text style={styles.register}
        onPress={() => navigation.navigate("register")}
        >Aun no tienes Cuenta? {" "}
            <Text style={styles.btnregister}>REGISTRATE!!!</Text>

        </Text>   
    )

}

const styles = StyleSheet.create({
    image : {
        height : 150,
        width : "100%",
        marginBottom: 20
    },
    container: {
        marginHorizontal: 40
    },
    divider: {
        backgroundColor: "#bf4d7f",
        margin: 40
    },
    register:{
        marginTop: 15,
        marginHorizontal:  10,
        alignSelf: "center"
    },
    btnregister:{
        color: "#bf4d7f",
        fontWeight: "bold"
    },
    btnRegister: {
        color: "#bf4d7f",
        fontWeight: "bold"
    }


})
