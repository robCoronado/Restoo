import React, {useState, useRef, useEffect} from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-easy-toast'

import { closeSession, getCurrentUser } from '../../utils/actions'
import InfoUser from '../../components/Account/InfoUser'
import Loading from '../../components/Loading'
import AccountOptions from '../../components/Account/AccountOptions'


export default function UserLogged() {
    const toastRef = useRef()
    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [user, setUser] = useState(null)
    const [relodUser, setRelodUser] = useState(false)

    useEffect(() => {
        setUser(getCurrentUser())
        setRelodUser(false)
    }, [relodUser])



    return (
        <View style={styles.container}>
            {
               user &&  (
                <View>
                    <InfoUser 
                            user={user} 
                            setLoading ={setLoading} 
                            setLoadingText={setLoadingText}
                    />
                             <AccountOptions
                            user={user} 
                            toastRef={toastRef}
                            setRelodUser={setRelodUser}
                        />
                 </View>           
                )

            }
            
            
            <Button
                title= "Cerrar Sesion"
                buttonStyle={styles.btnCloseSession}
                titleStyle={styles.btnCloseSessionTitle}
                onPress={() => {
                    closeSession()
                    navigation.navigate("restaurantss")

                }}            
            />
            <Toast ref={toastRef} position="center" opacity={0.9}/>
            <Loading isVisible={loading} text={loadingText}/>
        </View>
    )
}

const styles = StyleSheet.create({
        container:{
            minHeight: "10%",
            backgroundColor: "#f9f9f9",
            
            
        },
        btnCloseSession:{
            marginTop: 100,
            borderRadius: 10,
            backgroundColor: "#ced2d9",
            borderTopWidth: 1,
            borderTopColor: "#bf4d7f",
            borderBottomWidth: 1,
            borderBottomColor: "#bf4d7f",
            paddingVertical: 10,
            paddingHorizontal: 90
            
            
        },
        btnCloseSessionTitle:{
            color: "#bf4d7f"
        }

})
