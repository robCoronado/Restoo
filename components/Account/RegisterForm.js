import { size } from 'lodash'
import React, {useState} from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import { validateEmail } from '../../utils/Helpers'
import { registerUser} from '../../utils/actions'

import{ useNavigation } from '@react-navigation/native'
import Loading from '../Loading'



export default function RegisterForm() {
        const[showPassword, setShowPassword] = useState (false)
        const [formData, setFormData] = useState(defaultFormValues())
        const [errorEmail, setErrorEmail] = useState("")
        const [errorPassword, setErrorPassword] = useState("")
        const [errorConfirm, setErrorConfirm] = useState("")
        const [loading, setLoading] = useState(false)

        const navigation = useNavigation()
 
    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text})
        
    }

    const doRegisterUser = async() => {
           if (!validateData()) {
               return;
           }

           setLoading(true)
           const result = await registerUser (formData.email, formData.password)
            if (!result.statusResponse) {
               setLoading(false)
               setErrorEmail(result.error)
               return
           }

           const token = await getToken()
            const resultUser = await addDocumentWithId("users", { token }, getCurrentUser().uid)
            if (!resultUser.statusResponse) {
                setLoading(false)
                setErrorEmail(result.error)
                return
            }       

            setLoading(false)
            navigation.navigate("account")

    }

    const validateData = () => {
        
        setErrorEmail("")
        setErrorPassword("")
        setErrorConfirm("")
        let isValid = true

        if(!validateEmail(formData.email)) {
            setErrorEmail("Debes ingresar un Correo Valido")
            isValid = false
        }

        if(size(formData.password) <6){
            setErrorPassword("La contraseña debe ser de almenos 6 caracteres")
            isValid = false
            
        }

        if(size(formData.confirm) <6){
            setErrorConfirm("La contraseña debe ser de almenos 6 caracteres")
            isValid = false
            
        }

        if(formData.password !== formData.confirm){
            setErrorPassword("Las contraseñas deben ser iguales")
            setErrorConfirm("Las contraseñas deben ser iguales")
            isValid = false
            
        }

        return isValid

    }


    return (
        <View style= {styles.form}>
            <Input
                containerStyle={styles.input}
                placeholder= "Ingresa tu e-mail..."
                onChange={(e) => onChange(e, "email")}
                keyboardType="email-address"
                errorMessage={errorEmail}
                defaultValeu={formData.email}
            />
             <Input
                containerStyle={styles.input}
                placeholder= "Ingresa tu contraseña"
                password={true}
                secureTextEntry={!showPassword}
                onChange={(e) => onChange(e, "password")}
                errorMessage={errorPassword}
                defaultValeu={formData.password}
                rightIcon={
                    <Icon
                        type="material-community"
                        name= { showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Input
                containerStyle={styles.input}
                placeholder= "Confirma tu contraseña"
                password={true}
                secureTextEntry={!showPassword}
                onChange={(e) => onChange(e, "confirm")}
                errorMessage={errorConfirm}
                defaultValeu={formData.confirm}
                rightIcon={
                    <Icon
                    type="material-community"
                    name= { showPassword ? "eye-off-outline" : "eye-outline"}
                    iconStyle={styles.icon}
                    onPress={() => setShowPassword(!showPassword)}
                />
                }
            />

            <Button
                title= "Registrar Nuevo Usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={() => doRegisterUser()}
            
            
            />
                <Loading isVisible={loading} text="Creando Cuenta...."/>
            
        </View>
    )
}

const defaultFormValues = () => {
    return {email: "", password: "", confirm: ""}
}




const styles = StyleSheet.create({
    form:{
        marginTop: 30
    },
    input:{
        width: "100%"
    },
    btnContainer:{
        marginTop: 20,
        width: "95%",
        alignSelf: "center"
    },
    btn:{
        backgroundColor: "#69338e"
    },
    icon:{
        color: "#bf4d7f"

    }


})
