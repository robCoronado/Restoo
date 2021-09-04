import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import RegisterForm from '../../components/Account/RegisterForm'
import{ KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"

export default function Register() {
    return (
        <KeyboardAwareScrollView >
             <Image
                    source={require("../../assets/restoo-removebg-preview.png")}
                    resizeMode="contain"
                    style={styles.image}
              />
            <RegisterForm/>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30

    },

    image : {
        height : 150,
        width : "100%",
        marginBottom: 20
    }

})
